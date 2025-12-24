"use client";

import { Box, Typography } from "@mui/material";

const flavors = [
  {
    title: "Basmati Rice",
    color: "#6D4C41",
    image: "/assets/images/8251404.jpg",
  },
  {
    title: "Olive Oil",
    color: "#2E7D32",
    image: "/assets/images/25745503.jpg",
  },
  {
    title: "Pure Honey",
    color: "#F9A825",
    image: "/assets/images/11284590.jpg",
  },
  {
    title: "Green Tea",
    color: "#33691E",
    image: "/assets/images/5501118.jpg",
  },
];

export default function FlavorShowcaseSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#FDECEC",

        backgroundImage: `
        radial-gradient(rgba(0,0,0,0.09) 1px, transparent 1px),
        radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)`,
        backgroundSize: "16px 16px, 32px 32px",
        backgroundPosition: "0 0, 8px 8px",

        py: { xs: 12, md: 16 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
          gap: { xs: 4, md: 4 },
          alignItems: "flex-end",
        }}
      >
        {flavors.map((flavor) => (
          <Box
            key={flavor.title}
            sx={{
              textAlign: "center",
              transition: "transform 350ms ease",
              willChange: "transform",

              "&:hover": {
                transform: "translateY(-12px) scale(1.06)",
              },

              /* 👇 THIS scopes hover to THIS card only */
              "&:hover .flavor-desc": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            {/* IMAGE WRAPPER */}
            <Box
              sx={{
                width: 250,
                height: 380, // same height for all
                mx: "auto",
                borderRadius: 4,
                overflow: "hidden",
                filter: "drop-shadow(0 22px 45px rgba(0,0,0,0.35))",
              }}
            >
              <Box
                component="img"
                src={flavor.image}
                alt={flavor.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                mt: 3,
                fontWeight: 900,
                letterSpacing: 1,
                color: flavor.color,
              }}
            >
              {flavor.title.toUpperCase()}
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              className="flavor-desc"
              sx={{
                mt: 2,
                fontSize: "0.9rem",
                lineHeight: 1.6,
                maxWidth: 260,
                mx: "auto",
                color: "#333",

                // 👇 Mobile: always visible
                opacity: { xs: 1, md: 0 },
                transform: { xs: "none", md: "translateY(10px)" },

                transition: {
                  md: "opacity 280ms ease, transform 280ms ease",
                },

                minHeight: 70,
                pointerEvents: "none",
              }}
            >
              Raw Kombucha made with carefully selected ingredients. Dummy
              content for now until final copy is ready.
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
