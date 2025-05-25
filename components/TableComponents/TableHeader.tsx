import React from "react";
import { Box, TableCell, TableRow, Tooltip, Typography } from "@mui/material";
import { Info } from "@mui/icons-material";
import { Column } from "@/types";

const renderCellContent = (columnData: Column) => {
  if (columnData?.subText) {
    return (
      <Box display="flex" alignItems="center" gap={0.5}>
        {columnData.label}
        <Typography variant="caption" sx={{ fontSize: "10px" }}>
          {columnData.subText}
        </Typography>
      </Box>
    );
  }

  if (columnData.tooltipText) {
    return (
      <Box display="flex" alignItems="center" gap={0.5}>
        <Tooltip title={columnData.tooltipText}>
          <Info sx={{ fontSize: 12, color: "#6b7280" }} />
        </Tooltip>
        {columnData.label}
      </Box>
    );
  }

  return <>{columnData.label}</>;
};

const TableHeader = (columns: Column[]) => {
  return (
    <TableRow>
      {columns.map((col) => (
        <TableCell key={col.label} sx={{ width: "auto", ...col.styles }}>
          {renderCellContent(col)}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableHeader;
