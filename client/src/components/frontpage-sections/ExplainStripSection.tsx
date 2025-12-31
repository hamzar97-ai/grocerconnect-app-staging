"use client";

import { Box, Typography } from "@mui/material";

const rows = [
  {
    text: "Independent, Not Alone",
    bg: "#EF3A3A",
    color: "#FFFFFF",
    hoverBg: "#C62828",
    hoverColor: "#FFF176",
  },
  {
    text: "A Connected Grocery Network",
    bg: "#7E57C2",
    color: "#FFF176",
    hoverBg: "#5E35B1",
    hoverColor: "#FFFFFF",
  },
  {
    text: "Built to Grow Together",
    bg: "#7CB342",
    color: "#2E7D32",
    hoverBg: "#558B2F",
    hoverColor: "#FFFFFF",
  },
];

export default function ExplainStripSection() {
  return (
    <Box>
      {rows.map((row, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: row.bg,
            color: row.color,
            py: { xs: 6, md: 8 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",

            transition: "background-color 300ms ease, color 300ms ease",

            "&:hover": {
              backgroundColor: row.hoverBg,
              color: row.hoverColor,
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              letterSpacing: "3px",
              textTransform: "capitalize",
              textShadow: "0 6px 0 rgba(0,0,0,0.15)",
              fontSize: {
                xs: "1.6rem", // mobile
                sm: "3.2rem", // tablets
                md: "4.1rem", // ⬅ 900–1023 (compact desktop)
                lg: "5.2rem", // ⬅ desktop
                xl: "5.6rem", // ⬅ large screens
              },
              lineHeight: 1.05,
              px: { xs: 1, md: 0 },
            }}
          >
            {row.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
