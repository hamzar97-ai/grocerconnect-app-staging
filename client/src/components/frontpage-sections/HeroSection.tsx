"use client";

import { useState } from "react";
import { Box, Container, Typography, IconButton, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/**
 * Slides configuration
 * Each slide controls:
 * - image
 * - background color
 */
const slides = [
  {
    image: "/assets/images/369.jpg",
    bgColor: "#FFF176", // soft yellow
  },
  {
    image: "/assets/images/2152003889.jpg",
    bgColor: "#C8E6C9", // soft green
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 3,
        overflow: "hidden",
        bgcolor: slides[activeIndex].bgColor,
        transition: "background-color 600ms ease",
        py: { xs: 6, md: 10 },
        pb: { xs: 16, md: 24 },
      }}
    >
      {/* DOT BACKGROUND */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
      radial-gradient(
        rgba(0, 0, 0, 0.14) 1px,
        transparent 1px
      )
    `,
          backgroundSize: "20px 20px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* ================= HEADING ================= */}
        <Typography
          component="h1"
          textAlign="center"
          sx={{
            mb: { xs: 2, md: 0 },

            fontFamily: "var(--font-fredoka)",
            fontSize: {
              xs: "2.8rem",
              sm: "3.4rem",
              md: "4.2rem",
            },
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "#2b2b2b",

            /* Outline + depth (refined) */
            textShadow: `
      -2px -2px 0 #ffffff,
       2px -2px 0 #ffffff,
      -2px  2px 0 #ffffff,
       2px  2px 0 #ffffff,
       0px  6px 14px rgba(0,0,0,0.3)
    `,
          }}
        >
          At the Heart of the Community
        </Typography>

        {/* ================= SLIDER AREA ================= */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: { xs: 1, md: 0 },
          }}
        >
          {/* LEFT ARROW */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: -12, md: -28 }, // closer to image
              width: { md: 56 },
              height: { md: 56 },
              bgcolor: "primary.main",
              color: "#fff",
              boxShadow: 4,
              transition: "all 300ms ease",

              "& svg": {
                fontSize: { md: "1.8rem" },
              },

              "&:hover": {
                bgcolor: "secondary.main",
                transform: "scale(1.08)",
              },
              zIndex: 2,
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* IMAGE WRAPPER */}
          <Box
            key={slides[activeIndex].image}
            component="img"
            src={slides[activeIndex].image}
            alt="Community spotlight"
            sx={{
              width: { xs: 260, md: 380 },
              maxWidth: "100%",
              borderRadius: 4,
              zIndex: 1,

              /* Base look */
              boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              transition: "transform 400ms ease, box-shadow 400ms ease",

              /* Slide animation */
              animation: "fadeSlide 600ms ease",

              /* Hover effects (desktop only) */
              "&:hover": {
                transform: "scale(1.05) rotate(-1deg)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
              },
            }}
          />

          {/* RIGHT ARROW */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: -12, md: -28 }, // closer to image
              width: { md: 56 },
              height: { md: 56 },
              bgcolor: "primary.main",
              color: "#fff",
              boxShadow: 4,
              transition: "all 300ms ease",

              "& svg": {
                fontSize: { md: "1.8rem" },
              },

              "&:hover": {
                bgcolor: "secondary.main",
                transform: "scale(1.08)",
              },
              zIndex: 2,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* ================= CTA ================= */}
        <Box textAlign="center" mt={6}>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              px: 6,
              py: 1.5,
              borderRadius: 999,
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "none",
              bgcolor: "secondary.main",
              color: "primary.contrastText",
              boxShadow: "0 6px 0 rgba(0,0,0,0.15)",
              transition: "all 200ms ease",

              "&:hover": {
                bgcolor: "secondary.dark",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 0 rgba(0,0,0,0.15)",
              },
            }}
          >
            View More
          </Button>
        </Box>
      </Container>

      {/* ================= IMAGE TRANSITION KEYFRAMES ================= */}
      <style jsx global>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </Box>
  );
}
