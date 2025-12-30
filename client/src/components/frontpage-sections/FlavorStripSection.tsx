"use client";

import { Box, Typography } from "@mui/material";

const flavors = [
  {
    title: "HERBAL INFUSIONS",
    bg: "#7E57C2",
    hoverBg: "#6A4CB3",
    color: "#FFEB3B",
  },
  {
    title: "FRESH & FRUITY",
    bg: "#F8A1A4",
    hoverBg: "#F48B90",
    color: "#D32F2F",
  },
  {
    title: "CITRUS KICKS",
    bg: "#F9A825",
    hoverBg: "#F57F17",
    color: "#1B5E20",
  },
  {
    title: "EVERYDAY GOODNESS",
    bg: "#FFF176",
    hoverBg: "#FFEE58",
    color: "#E91E63",
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
              xs: 120,
              sm: 140,
              md: 150, // ⬅ tighter at 900–1024
              lg: 180, // ⬅ full desktop
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
              whiteSpace: "pre-line",
              fontFamily: "var(--font-fredoka)",
              fontWeight: 900,
              fontSize: {
                xs: "1.3rem",
                sm: "1.6rem",
                md: "1.8rem", // ⬅ 900–1023 (compact)
                lg: "2.1rem", // ⬅ desktop
              },
              letterSpacing: {
                xs: "0.06em",
                md: "0.05em",
                lg: "0.08em",
              },
              color: flavor.color,
              textTransform: "uppercase",
            }}
          >
            {flavor.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
