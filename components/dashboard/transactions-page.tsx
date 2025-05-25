"use client";

import { Box } from "@mui/material";
import { PageHeader } from "./page-header";
import { FilterControls } from "./filter-controls";
import { TransactionTable } from "../TableComponents/TransactionTable";
import { MOCK_TRANSACTIONS, TRANSACTION_COLUMNS } from "@/lib/constants";

export function TransactionsPage() {
  return (
    <Box sx={{ flexGrow: 1, overflow: "auto" }}>
      <Box p={3}>
        <PageHeader title="Transactions" />
        <FilterControls />
      </Box>
      <TransactionTable
        transactions={MOCK_TRANSACTIONS}
        columns={TRANSACTION_COLUMNS}
      />
    </Box>
  );
}
