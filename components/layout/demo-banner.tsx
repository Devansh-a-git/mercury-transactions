"use client";

import { Box, Typography, Button } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";

export function DemoBanner() {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        color: "white",
        px: 2,
        py: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontSize: "0.75rem", fontWeight: 500, color: "white" }}
          >
            D
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ fontWeight: 500, color: "white" }}>
          DEMO
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
          Welcome to the Mercury Demo.
        </Typography>
        <Box
          component="a"
          href="#"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            textDecoration: "underline",
            display: "flex",
            alignItems: "center",
            fontSize: "0.875rem",
          }}
        >
          Learn more about Mercury
          <KeyboardArrowRight sx={{ fontSize: 16, ml: 0.5 }} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button
          variant="outlined"
          size="small"
          sx={{
            border: "none",
            borderRadius: "999px",
            backgroundColor: "white",
          }}
          endIcon={<KeyboardArrowDown sx={{ fontSize: 16 }} />}
        >
          Customize Demo
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{
            color: "white",
            backgroundColor: "#5266eb",
            border: "none",
            borderRadius: "999px",
            "&:hover": {
              backgroundColor: "#5266eb", 
            },
          }}
          endIcon={<KeyboardArrowRight sx={{ fontSize: 16 }} />}
        >
          Open Account
        </Button>
      </Box>
    </Box>
  );
}
