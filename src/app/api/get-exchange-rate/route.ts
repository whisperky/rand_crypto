import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      `https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.EXCHANGE_RATE_API_KEY}&base_currency=ZAR&currencies=USD`
    );

    return NextResponse.json({ rate: response.data.data.USD });
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    return NextResponse.json(
      { error: "Failed to fetch exchange rate" },
      { status: 500 }
    );
  }
}
