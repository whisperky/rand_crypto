import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const symbol = searchParams.get('symbol');

  if (!symbol) {
    return NextResponse.json(
      { error: 'Symbol parameter is required' },
      { status: 400 }
    );
  }

  const CMC_FETCHING_PRICE_URL =
    "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest";

  try {
    const response = await axios.get(`${CMC_FETCHING_PRICE_URL}?convert=zar&symbol=${symbol}`, {
      headers: {
        Accepts: 'application/json',
        'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
      },
    });

    const data = response.data;
    if (data && data.status && data.status.error_code === 0) {
      const price = data.data[symbol][0].quote.ZAR.price * 103 / 100;
      return NextResponse.json({ price: price });
    } else {
      console.error('Error in API response');
      return NextResponse.json([], { status: 400 });
    }
  } catch (error) {
    console.error('Error in API request', error);
    return NextResponse.json([], { status: 500 });
  }
}
