"use client";

import { Box, Typography } from "@mui/material";

const flavors = [
  { title: "Yuzu Lavender", color: "#7E57C2" },
  { title: "Jasmine Hibiscus", color: "#E53935" },
  { title: "Citra Spark", color: "#43A047" },
  { title: "Lychee Rose", color: "#FBC02D" },
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
          gap: { xs: 6, md: 4 },
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
            {/* IMAGE */}
            <Box
              component="img"
              src="/assets/images/5645049.jpg"
              alt={flavor.title}
              sx={{
                width: "100%",
                maxWidth: 240,
                mx: "auto",
                display: "block",
                filter: "drop-shadow(0 22px 45px rgba(0,0,0,0.35))",
              }}
            />

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

                opacity: 0,
                transform: "translateY(10px)",
                transition: "opacity 280ms ease, transform 280ms ease",

                minHeight: 70, // prevents layout shift
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
