"use client";

import {
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
} from "@mui/material";
import { TableVirtuoso } from "react-virtuoso";
import TableHeader from "./TableHeader";
import Row from "./Row";
import { Column, Transaction } from "@/types";
import EmptyState from "../layout/EmptyState";

interface TransactionTableProps {
  transactions: Transaction[];
  columns: Column[]
}

export function TransactionTable({ transactions, columns }: TransactionTableProps) {
  if (!transactions.length) {
    return <EmptyState />;
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        height: "calc(100vh - 285px)",
        width: "100%",
      }}
    >
      <TableVirtuoso
        style={{ width: "100%" }}
        data={transactions}
        components={{
          Table: ({ style, ...props }) => (
            <Table
              {...props}
              style={{
                ...style,
                width: "100%",
              }}
            />
          ),
          TableRow: (props) => (
            <TableRow className="self-rows" {...props} hover />
          ),
          TableHead: (props) => <TableHead {...props} />,
        }}
        fixedHeaderContent={() => TableHeader(columns)}
        itemContent={(index, transaction) => (
          <Row
            index={index}
            transaction={transaction}
            transactions={transactions}
          />
        )}
      />
    </TableContainer>
  );
}
