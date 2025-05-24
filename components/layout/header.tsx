"use client"

import { Box, TextField, Button, Avatar, InputAdornment, Typography } from "@mui/material"
import { Search, KeyboardArrowDown } from "@mui/icons-material"
import type { User } from "@/types"

interface HeaderProps {
  user: User
}

export function Header({ user }: HeaderProps) {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #e5e7eb",
        p: 2,
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ position: "relative", flexGrow: 1, maxWidth: 400 }}>
        <TextField
          placeholder="Search transactions or more"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ fontSize: 16, color: "#9ca3af" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Typography variant="caption" sx={{ color: "#9ca3af", fontSize: "0.75rem" }}>
                  ⌘ K
                </Typography>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box sx={{ ml: 2, display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          size="small"
          sx={{
            color: "#2563eb",
            borderColor: "#bfdbfe",
            "&:hover": {
              backgroundColor: "#eff6ff",
              borderColor: "#93c5fd",
            },
          }}
          endIcon={<KeyboardArrowDown sx={{ fontSize: 16 }} />}
        >
          Move Money
        </Button>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            backgroundColor: "#dbeafe",
            color: "#374151",
            fontSize: "0.875rem",
          }}
        >
          {user.initials}
        </Avatar>
      </Box>
    </Box>
  )
}
