"use client";

import { Box, Typography } from "@mui/material";

const flavors = [
  {
    title: "Heading text\nHere",
    bg: "#7E57C2",
    hoverBg: "#6A4CB3",
    color: "#FFEB3B",
  },
  {
    title: "Heading text\nHere",
    bg: "#F8A1A4",
    hoverBg: "#F48B90",
    color: "#D32F2F",
  },
  {
    title: "Heading text\nHere",
    bg: "#F9A825",
    hoverBg: "#F57F17",
    color: "#1B5E20",
  },
  {
    title: "Heading text\nHere",
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
            height: { xs: 120, md: 140 },
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
              fontSize: { xs: "1.3rem", md: "1.6rem" },
              letterSpacing: "0.08em",
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
