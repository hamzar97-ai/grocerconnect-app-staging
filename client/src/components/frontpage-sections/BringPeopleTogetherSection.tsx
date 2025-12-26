"use client";

import { Box, Typography } from "@mui/material";

export default function BringPeopleTogetherSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#FDECEC",
        backgroundImage: `
          radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
          radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "16px 16px, 32px 32px",
        backgroundPosition: "0 0, 8px 8px",
        pt: { xs: 4, md: 6 },
        pb: { xs: 10, md: 24 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 0 }}>
          <Typography
            sx={{
              fontSize: { xs: "3rem", md: "5.2rem" },
              fontFamily: "var(--font-passion)",
              letterSpacing: "-0.02em",
              color: "#E53935",
              transform: "rotate(-2deg)",
              display: "inline-block",
              textShadow: `
        3px 3px 0 #000,
        8px 8px 25px rgba(0,0,0,0.25)
      `,
              mb: 0,
            }}
          >
            Grocer Connect Brings
          </Typography>

          <br />

          <Typography
            sx={{
              fontSize: { xs: "3rem", md: "6.4rem" },
              fontFamily: "var(--font-passion)",
              mt: { xs: -2, md: -4 },
              letterSpacing: "-0.02em",
              color: "#7E57C2",
              transform: "rotate(1.5deg)",
              display: "inline-block",
              textShadow: `
        3px 3px 0 #000,
        10px 10px 30px rgba(0,0,0,0.3)
      `,
            }}
          >
            People Together
          </Typography>
        </Box>

        {/* IMAGE WRAPPER */}
        <Box
          sx={{
            maxWidth: 900,
            mx: "auto",
            position: "relative",
            borderRadius: "48px",
            overflow: "hidden",

            transform: "rotate(-1.5deg)",
            transition: "transform 600ms cubic-bezier(.22,.61,.36,1)",

            boxShadow: "0 40px 90px rgba(0,0,0,0.35)",

            "&:hover": {
              transform: "rotate(0deg) scale(1.03)",
            },
          }}
        >
          {/* IMAGE */}
          <Box
            component="img"
            src="/assets/images/144500.jpg"
            alt="People enjoying drinks together"
            sx={{
              width: "100%",
              display: "block",
              transition: "transform 600ms ease",

              ".MuiBox-root:hover &": {
                transform: "scale(1.06)",
              },
            }}
          />

          {/* SOFT COLOR OVERLAY (very subtle) */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(229,57,53,0.08), rgba(126,87,194,0.06))",
              pointerEvents: "none",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
