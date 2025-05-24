"use client"

import { Box, Typography } from "@mui/material"
import type { Account } from "@/types"

interface AccountBalanceProps {
  account: Account
}

export function AccountBalance({ account }: AccountBalanceProps) {
  const displayName = account.accountNumber ? `${account.name} • ${account.accountNumber}` : account.name

  return (
    <Box sx={{ py: 0.5 }}>
      <Typography variant="caption" sx={{ color: "#6b7280" }}>
        {displayName}
      </Typography>
      {account.balance && (
        <Typography variant="caption" sx={{ display: "block", color: "#374151", fontWeight: 500 }}>
          {account.balance}
        </Typography>
      )}
    </Box>
  )
}
