"use client";

import { Box, Button, Typography } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const items = [
  {
    icon: <StorefrontIcon fontSize="inherit" />,
    value: "21574",
    label: "Independent\nStores",
  },
  {
    icon: <ShoppingCartIcon fontSize="inherit" />,
    value: "33%",
    label: "Of the Retail Grocery\nIndustry Sales",
  },
  {
    icon: <BarChartIcon fontSize="inherit" />,
    value: "$253.6",
    label: "Billion In\nAnnual Sales",
  },
  {
    icon: <TrendingUpIcon fontSize="inherit" />,
    value: "1.2%",
    label: "Of the United\nStates GDP",
  },
];

export default function ImpactSection() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        px: { xs: 2, md: 6 },
        backgroundColor: "#D90429",

        /* subtle background pattern */
        backgroundImage: `
          radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "22px 22px",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
        <Typography
          sx={{
            fontFamily: "var(--font-fredoka)",
            fontSize: { xs: "2.6rem", md: "3.2rem" },
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "0.04em",
          }}
        >
          Our Impact
        </Typography>

        <Box
          sx={{
            width: 48,
            height: 4,
            bgcolor: "#0B2C6F",
            mx: "auto",
            mt: 2,
            borderRadius: 999,
          }}
        />
      </Box>

      {/* Stats */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 6, md: 4 },
          textAlign: "center",
        }}
      >
        {items.map((item, index) => (
          <Box key={index}>
            {/* Icon */}
            <Box
              sx={{
                width: 110,
                height: 110,
                mx: "auto",
                mb: 3,
                borderRadius: "50%",
                border: "2px dashed rgba(255,255,255,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
                color: "#fff",
              }}
            >
              {item.icon}
            </Box>

            {/* Value */}
            <Typography
              sx={{
                fontFamily: "var(--font-fredoka)",
                fontSize: { xs: "2.6rem", md: "3.2rem" },
                fontWeight: 900,
                color: "#fff",
                mb: 1,
              }}
            >
              {item.value}
            </Typography>

            {/* Label */}
            <Typography
              sx={{
                whiteSpace: "pre-line",
                fontSize: "1rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* CTA */}
      <Box sx={{ textAlign: "center", mt: { xs: 8, md: 10 } }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#0B2C6F",
            color: "#fff",
            px: 5,
            py: 1.6,
            borderRadius: "999px",
            fontWeight: 700,
            fontSize: "1rem",
            textTransform: "none",

            "&:hover": {
              bgcolor: "#08235A",
            },
          }}
        >
          Learn More →
        </Button>
      </Box>
    </Box>
  );
}
