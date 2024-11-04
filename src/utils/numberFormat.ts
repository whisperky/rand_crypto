export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return Math.floor(num / 1000000) + "M";
  } else if (num >= 1000) {
    return Math.floor(num / 1000) + "K";
  }
  return Math.floor(num).toString();
};

export const formatNumberWithCommas = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};