"use client"

import { ListItemButton, ListItemIcon, ListItemText, Chip, Box } from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material"
import type { NavigationItem as NavigationItemType } from "@/types"

interface NavigationItemProps {
  item: NavigationItemType
}

export function NavigationItem({ item }: NavigationItemProps) {
  const { name, icon: Icon, isActive, badge, hasSubmenu } = item

  return (
    <ListItemButton selected={isActive} sx={{ py: 1 }}>
      <ListItemIcon sx={{ minWidth: 40 }}>
        <Icon sx={{ fontSize: 20, color: isActive ? "#111827" : "#6b7280" }} />
      </ListItemIcon>
      <ListItemText
        primary={name}
        primaryTypographyProps={{
          fontSize: "0.875rem",
          fontWeight: isActive ? 500 : 400,
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {badge && <Chip label={badge} size="small" />}
        {hasSubmenu && <KeyboardArrowDown sx={{ fontSize: 16, color: "#6b7280" }} />}
      </Box>
    </ListItemButton>
  )
}
