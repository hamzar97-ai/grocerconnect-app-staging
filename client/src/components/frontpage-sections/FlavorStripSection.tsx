"use client";

import { Box, Typography } from "@mui/material";

const flavors = [
  {
    title: "Western Canada",
    bg: "#7E57C2", // Purple
    hoverBg: "#6A4CB3",
    color: "#FFEB3B", // Yellow text
  },
  {
    title: "Ontario",
    bg: "#F8A1A4", // Pink
    hoverBg: "#F48B90",
    color: "#EB373E", // Red text
  },
  {
    title: "Atlantic Provinces",
    bg: "#F9A825", // Orange
    hoverBg: "#F57F17",
    color: "#2E7D32", // Green text
  },
  {
    title: "Northern Canada",
    bg: "#FFF176", // Yellow
    hoverBg: "#FFEE58",
    color: "#E91E63", // Pink text
  },
];

export default function FlavorStripSection() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        },
        width: "100%",
        overflow: "hidden",
      }}
    >
      {flavors.map((flavor, index) => (
        <Box
          key={index}
          sx={{
            height: {
              xs: 100,
              sm: 100,
              md: 120, // ⬅ tighter at 900–1024
              lg: 120, // ⬅ full desktop
            },
            bgcolor: flavor.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            cursor: "pointer",

            transition: "background-color 350ms ease, transform 350ms ease",

            "&:hover": {
              bgcolor: flavor.hoverBg,
              transform: "translateY(-4px)",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-be-vietnam)",
              fontSize: "clamp(20px, 1.565vw, 42px)",
              lineHeight: 1.3,
              textTransform: "uppercase",
              textAlign: "center",
              fontWeight: 900, // closest match to typical Be Vietnam headings
              letterSpacing: "0.04em",
              color: flavor.color,
              whiteSpace: "pre-line",
            }}
          >
            {flavor.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
