"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Box,
  Typography,
} from "@mui/material"
import { Add, TrendingUp, CreditCard, Info } from "@mui/icons-material"

interface Transaction {
  id: string
  date: string
  merchant: string
  amount: number
  account: string
  paymentMethod: string
  icon: string
  iconBg: string
  type: "transfer" | "payment" | "credit"
}

interface TransactionsTableProps {
  transactions: Transaction[]
}

function formatCurrency(amount: number): string {
  const isNegative = amount < 0
  const absAmount = Math.abs(amount)
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(absAmount)

  return isNegative ? `−${formatted}` : formatted
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  const getPaymentMethodIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "transfer":
        return <TrendingUp sx={{ fontSize: 16, color: "#6b7280" }} />
      case "payment":
        return <CreditCard sx={{ fontSize: 16, color: "#6b7280" }} />
      default:
        return <CreditCard sx={{ fontSize: 16, color: "#6b7280" }} />
    }
  }

  const getAmountColor = (amount: number) => {
    return amount >= 0 ? "#059669" : "#dc2626"
  }

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, border: "1px solid #e5e7eb" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "12%" }}>
              <Box display="flex" alignItems="center" gap={0.5}>
                Date
                <Typography variant="caption" sx={{ fontSize: "10px" }}>
                  (GMT+8:30)
                </Typography>
              </Box>
            </TableCell>
            <TableCell sx={{ width: "20%" }}>To/From</TableCell>
            <TableCell align="right" sx={{ width: "15%" }}>
              Amount
            </TableCell>
            <TableCell sx={{ width: "15%" }}>Account</TableCell>
            <TableCell sx={{ width: "20%" }}>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Info sx={{ fontSize: 12, color: "#6b7280" }} />
                Payment Method
              </Box>
            </TableCell>
            <TableCell sx={{ width: "15%" }}>Attachment</TableCell>
            <TableCell sx={{ width: "3%" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} hover>
              <TableCell>
                <Typography variant="body2" color="text.secondary">
                  {transaction.date}
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: transaction.iconBg,
                      color: "#374151",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {transaction.icon}
                  </Avatar>
                  <Typography variant="body2">{transaction.merchant}</Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Typography
                  variant="body2"
                  sx={{
                    color: getAmountColor(transaction.amount),
                    fontWeight: 500,
                  }}
                >
                  {formatCurrency(transaction.amount)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{transaction.account}</Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  {getPaymentMethodIcon(transaction.type)}
                  <Typography variant="body2" color="text.secondary">
                    {transaction.paymentMethod}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>{/* Attachment placeholder */}</TableCell>
              <TableCell align="right">
                <IconButton size="small" sx={{ color: "#6b7280" }}>
                  <Add fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
