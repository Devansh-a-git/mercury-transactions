"use client"

import { Box, ThemeProvider, CssBaseline, createTheme } from "@mui/material"
import type { ReactNode } from "react"
import { DemoBanner } from "./demo-banner"
import { Header } from "./header"
import { Sidebar } from "../navigation/sidebar"

interface User {
  name: string
  initials: string
  avatar?: string
}

interface MainLayoutProps {
  children: ReactNode
  user: User
}

// Theme directly in component
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
      light: "#3b82f6",
      dark: "#1d4ed8",
    },
    secondary: {
      main: "#6b7280",
      light: "#9ca3af",
      dark: "#4b5563",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },
    grey: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    success: {
      main: "#059669",
      light: "#10b981",
      dark: "#047857",
    },
    error: {
      main: "#dc2626",
      light: "#ef4444",
      dark: "#b91c1c",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.4,
    },
    caption: {
      fontSize: "0.75rem",
      color: "#6b7280",
      lineHeight: 1.4,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 6,
          padding: "8px 16px",
        },
        outlined: {
          borderColor: "#e5e7eb",
          color: "#374151",
          "&:hover": {
            backgroundColor: "#f9fafb",
            borderColor: "#d1d5db",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 6,
            fontSize: "0.875rem",
            "& fieldset": {
              borderColor: "#e5e7eb",
            },
            "&:hover fieldset": {
              borderColor: "#d1d5db",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2563eb",
              borderWidth: 1,
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #f3f4f6",
          padding: "12px 16px",
          fontSize: "0.875rem",
        },
        head: {
          backgroundColor: "#ffffff",
          fontWeight: 500,
          color: "#6b7280",
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#f9fafb",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "1px solid #e5e7eb",
          boxShadow: "none",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          margin: "2px 8px",
          "&.Mui-selected": {
            backgroundColor: "#f3f4f6",
            color: "#111827",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#f3f4f6",
            },
          },
          "&:hover": {
            backgroundColor: "#f9fafb",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "0.75rem",
          height: 20,
          backgroundColor: "#f3f4f6",
          color: "#6b7280",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: "0.75rem",
          fontWeight: 500,
        },
      },
    },
  },
})

export function MainLayout({ children, user }: MainLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "white" }}>
        <DemoBanner />
        <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
          <Sidebar />
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, overflow: "hidden" }}>
            <Header user={user} />
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
