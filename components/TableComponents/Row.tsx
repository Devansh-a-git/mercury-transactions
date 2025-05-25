import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  MenuItem,
  Select,
  TableCell,
  Typography,
} from "@mui/material";
import { formatDateToMonthDay, formatValue, getAmountColor } from "@/lib/utils";
import { Add, CreditCard, TrendingUp } from "@mui/icons-material";
import { Transaction } from "@/types";

interface RowProps {
  index: number;
  transaction: Transaction;
  transactions: Transaction[];
}

const Row = ({ index, transaction, transactions }: RowProps) => {
  const {
    date,
    amount,
    currency,
    account,
    type,
    icon,
    iconBg,
    merchant,
    paymentMethod,
  } = transaction;

  const isDateSame =
    formatDateToMonthDay(transactions[index - 1]?.date) ===
    formatDateToMonthDay(date);

  const getPaymentMethodIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "transfer":
        return <TrendingUp sx={{ fontSize: 16, color: "#6b7280" }} />;
      case "payment":
        return <CreditCard sx={{ fontSize: 16, color: "#6b7280" }} />;
      default:
        return <CreditCard sx={{ fontSize: 16, color: "#6b7280" }} />;
    }
  };

  return (
    <>
      <TableCell className="">
        <Typography
          variant="body2"
          color="text.secondary"
          className="date_visibility"
          style={{ display: isDateSame ? "none" : "" }}
        >
          {formatDateToMonthDay(date)}
        </Typography>
      </TableCell>
      <TableCell>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar
            sx={{
              width: 24,
              height: 24,
              backgroundColor: iconBg,
              color: "#374151",
              fontSize: "0.75rem",
              fontWeight: 500,
            }}
          >
            {icon}
          </Avatar>
          <Typography variant="body2">{merchant}</Typography>
        </Box>
      </TableCell>
      <TableCell align="right">
        <Typography
          variant="body2"
          sx={{
            color: getAmountColor(amount),
            fontWeight: 500,
          }}
        >
          {formatValue(amount, currency)}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{account}</Typography>
      </TableCell>
      <TableCell>
        <Box display="flex" alignItems="center" gap={1}>
          {getPaymentMethodIcon(type)}
          <Typography variant="body2" color="text.secondary">
            {paymentMethod}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Select
          fullWidth
          sx={{
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0, 0, 0, 0.87)",
              borderWidth: "1px",
            },
          }}
        >
          <MenuItem>Dummy 1</MenuItem>
          <MenuItem>Dummy 2</MenuItem>
          <MenuItem>Dummy 3</MenuItem>
        </Select>
      </TableCell>
      <TableCell align="right">
        <IconButton size="small" sx={{ color: "#6b7280" }}>
          <Add fontSize="small" />
        </IconButton>
      </TableCell>
    </>
  );
};

export default Row;
