"use client"

import { Box } from "@mui/material"
import { PageHeader } from "./page-header"
import { FilterControls } from "./filter-controls"
import { TransactionsTable } from "./transactions-table"

// Mock data directly in the component for now
const MOCK_TRANSACTIONS = [
  {
    id: "1",
    date: "Dec 6",
    merchant: "To Ops / Payroll",
    amount: -54810.16,
    account: "AR",
    paymentMethod: "Transfer",
    icon: "$",
    iconBg: "#f3f4f6",
    type: "transfer" as const,
  },
  {
    id: "2",
    date: "",
    merchant: "From AR",
    amount: 54810.16,
    account: "Ops / Payroll",
    paymentMethod: "Transfer",
    icon: "$",
    iconBg: "#f3f4f6",
    type: "transfer" as const,
  },
  {
    id: "3",
    date: "Dec 5",
    merchant: "Lily's Eatery",
    amount: 0.93,
    account: "Ops / Payroll",
    paymentMethod: "Jane B. • 1234",
    icon: "LE",
    iconBg: "#dbeafe",
    type: "payment" as const,
  },
  {
    id: "4",
    date: "",
    merchant: "Deli 77",
    amount: 6.91,
    account: "Credit account",
    paymentMethod: "Jane B. • 5555",
    icon: "D7",
    iconBg: "#e9d5ff",
    type: "payment" as const,
  },
  {
    id: "5",
    date: "",
    merchant: "Deli 77",
    amount: 23.28,
    account: "Ops / Payroll",
    paymentMethod: "Landon S. • 4923",
    icon: "D7",
    iconBg: "#e9d5ff",
    type: "payment" as const,
  },
  {
    id: "6",
    date: "",
    merchant: "Office Stop Co.",
    amount: -287.89,
    account: "Ops / Payroll",
    paymentMethod: "Jessica A. • 9921",
    icon: "OS",
    iconBg: "#dbeafe",
    type: "payment" as const,
  },
  {
    id: "7",
    date: "",
    merchant: "Trader John's",
    amount: 53.49,
    account: "Credit account",
    paymentMethod: "Landon S. • 0331",
    icon: "TJ",
    iconBg: "#fee2e2",
    type: "payment" as const,
  },
  {
    id: "8",
    date: "",
    merchant: "Office Stop Co.",
    amount: -662.7,
    account: "Credit account",
    paymentMethod: "Jane B. • 0330",
    icon: "OS",
    iconBg: "#dbeafe",
    type: "payment" as const,
  },
  {
    id: "9",
    date: "",
    merchant: "Office Stop Co.",
    amount: 563.94,
    account: "Credit account",
    paymentMethod: "Jane B. • 0330",
    icon: "OS",
    iconBg: "#dbeafe",
    type: "payment" as const,
  },
  {
    id: "10",
    date: "",
    merchant: "The Plant Organic Cafe",
    amount: -14.21,
    account: "Ops / Payroll",
    paymentMethod: "Jane B. • 4928",
    icon: "P",
    iconBg: "#dcfce7",
    type: "payment" as const,
  },
]

export function TransactionsPage() {
  return (
    <Box sx={{ flexGrow: 1, overflow: "auto", p: 3 }}>
      <PageHeader title="Transactions" />
      <FilterControls />
      <TransactionsTable transactions={MOCK_TRANSACTIONS} />
    </Box>
  )
}
