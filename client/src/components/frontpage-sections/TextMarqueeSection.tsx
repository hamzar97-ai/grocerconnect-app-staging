"use client";

import { Box, Typography } from "@mui/material";

const TEXT = "National Grocers Association";

export default function TextMarqueeSection() {
  return (
    <Box
      sx={{
        /* SAME AS FAQ BACKGROUND */
        backgroundColor: "#FDECEC",
        backgroundImage: `
          radial-gradient(rgba(0,0,0,0.09) 1px, transparent 1px),
          radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)
        `,
        backgroundSize: "16px 16px, 32px 32px",
        backgroundPosition: "0 0, 8px 8px",

        overflow: "hidden",
        py: { xs: 4, md: 6 },
      }}
    >
      {/* TRACK */}
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "marquee 150s linear infinite",

          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {[...Array(2)].map((_, i) => (
          <Box key={i} sx={{ display: "flex" }}>
            {[...Array(8)].map((_, j) => (
              <Typography
                key={j}
                sx={{
                  fontSize: { xs: "2.2rem", md: "8rem" },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  px: { xs: 3, md: 5 },

                  /* THEME COLOR (NOT BACKGROUND) */
                  color: "#E53935",

                  letterSpacing: "0.1em",
                  opacity: 0.9,
                }}
              >
                {TEXT}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
