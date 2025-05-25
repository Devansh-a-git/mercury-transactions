import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAmountColor = (amount: number) => {
  return amount >= 0 ? "#059669" : "#dc2626";
};

export function formatDateToMonthDay(date: Date) {
  if (!date) return "";
  const options = { month: "short", day: "numeric", timeZone: "UTC" };
  return date.toLocaleString("en-US", options);
}

export function formatValue(value : number, currency: string) {
  if (value === undefined || value === null) return "";
  const options = { style: "currency", currency: currency };
  const formattedValue = new Intl.NumberFormat("en-US", options).format(value);
  const [integerPart, decimalPart] = formattedValue.split(".");
  if (!decimalPart) return formattedValue;
  return (
    <>
      {integerPart}.<sup>{decimalPart}</sup>
    </>
  );
}
