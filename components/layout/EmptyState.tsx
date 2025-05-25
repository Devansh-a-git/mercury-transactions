import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Unifize from "@/public/unifize.png";

const EmptyState = ({ content = "No transactions yet" }) => {
    return (
        <Box
            sx={{
                height: "calc(100vh - 450px)",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <Box
                sx={{
                    animation: "popInOut 2s infinite",
                    "@keyframes popInOut": {
                        "0%, 100%": {
                            transform: "scale(1)",
                        },
                        "50%": {
                            transform: "scale(1.05)",
                        },
                    },
                }}
            >
                <Image height={200} src={Unifize} alt="unifize" />
            </Box>
            <Typography variant="h1">{content}</Typography>
        </Box>
    );
};

export default EmptyState;
