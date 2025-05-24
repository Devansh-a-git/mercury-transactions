"use client"

import { Box, Typography, Avatar } from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material"

interface SidebarHeaderProps {
  companyName: string
}

export function SidebarHeader({ companyName }: SidebarHeaderProps) {
  return (
    <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          backgroundColor: "#000000",
          borderRadius: 1,
          p: 0.5,
          mr: 1.5,
        }}
      >
        <Avatar sx={{ width: 24, height: 24, backgroundColor: "#000000", fontSize: "0.75rem" }}>M</Avatar>
      </Box>
      <Typography variant="body1" sx={{ fontWeight: 500, flexGrow: 1 }}>
        {companyName}
      </Typography>
      <KeyboardArrowDown sx={{ fontSize: 16, color: "#6b7280" }} />
    </Box>
  )
}
