import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function formatCurrency(amount: number): string {
  const isNegative = amount < 0
  const absAmount = Math.abs(amount)
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(absAmount)

  return isNegative ? `−${formatted}` : formatted
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
