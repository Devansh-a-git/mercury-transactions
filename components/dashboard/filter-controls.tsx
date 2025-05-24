"use client"

import { Box, Button, Typography } from "@mui/material"
import { FilterList, Download } from "@mui/icons-material"

export function FilterControls() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
      <Button variant="outlined" size="small" startIcon={<FilterList sx={{ fontSize: 16 }} />}>
        Add Filter
      </Button>
      <Typography variant="body2" sx={{ color: "#6b7280" }}>
        No filters applied
      </Typography>
      <Button variant="outlined" size="small" startIcon={<Download sx={{ fontSize: 16 }} />}>
        Export All
      </Button>
    </Box>
  )
}
