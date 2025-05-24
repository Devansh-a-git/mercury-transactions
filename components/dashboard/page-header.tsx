"use client"

import { Box, Typography, IconButton } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"

interface PageHeaderProps {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
      <Typography variant="h1">{title}</Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton size="small">
          <KeyboardArrowLeft sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton size="small">
          <KeyboardArrowRight sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>
    </Box>
  )
}
