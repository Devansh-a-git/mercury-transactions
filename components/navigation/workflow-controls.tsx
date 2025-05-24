"use client"

import { Box, Typography, IconButton } from "@mui/material"
import { TrendingFlat, Add, Pause, FastRewind, Schedule, Delete } from "@mui/icons-material"

export function WorkflowControls() {
  return (
    <Box sx={{ p: 2, borderTop: "1px solid #e5e7eb" }}>
      <Typography variant="caption" sx={{ color: "#6b7280", mb: 1, display: "block" }}>
        Workflows
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <IconButton size="small" sx={{ border: "1px solid #e5e7eb" }}>
          <TrendingFlat sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            border: "1px solid #f97316",
            backgroundColor: "#f97316",
            color: "white",
            "&:hover": {
              backgroundColor: "#ea580c",
            },
          }}
        >
          <Add sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton size="small" sx={{ border: "1px solid #e5e7eb" }}>
          <Pause sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton size="small" sx={{ border: "1px solid #e5e7eb" }}>
          <FastRewind sx={{ fontSize: 16 }} />
        </IconButton>
        <Typography variant="caption" sx={{ color: "#6b7280", mx: 1 }}>
          4:52
        </Typography>
        <IconButton size="small" sx={{ border: "1px solid #e5e7eb" }}>
          <Schedule sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton size="small" sx={{ border: "1px solid #e5e7eb" }}>
          <Delete sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>
      <Typography variant="caption" sx={{ color: "#6b7280" }}>
        Invoicing
      </Typography>
    </Box>
  )
}
