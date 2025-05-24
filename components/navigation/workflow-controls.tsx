"use client"

import { Box, Typography, IconButton } from "@mui/material"
import { TrendingFlat, Add, Pause, FastRewind, Schedule, Delete } from "@mui/icons-material"

export function WorkflowControls() {
  return (
    <Box sx={{ p: 2, borderTop: "1px solid #e5e7eb" }}>
      <Typography variant="caption" sx={{ color: "#6b7280", mb: 1, display: "block" }}>
        Workflows
      </Typography>
      <Typography variant="caption" sx={{ color: "#6b7280" }}>
        Invoicing
      </Typography>
    </Box>
  )
}
