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
    image: "/assets/images/2152003889.jpg",
    bg: "secondary.main", // Yellow background
    arrowBg: "success.main", // Green circle
    arrowIcon: "success.contrastText", // 👈 OR use "success.main" if you want green icon
    arrowHover: "info.main",
    buttonBg: "success.main", // Green ribbon
    buttonText: "success.contrastText",
    buttonHover: "info.main",
  },
  {
    image: "/assets/images/369.jpg",
    bg: "success.main",
    arrowBg: "secondary.main",
    arrowIcon: "success.main",
    arrowHover: "info.main",
    buttonBg: "secondary.main",
    buttonText: "success.main",
    buttonHover: "info.main",
  },
];

const stickerStyles = {
  display: "block",
  width: "100%",
  position: "relative",

  fontFamily: "var(--font-passion)", // Passion One
  fontWeight: 700,
  color: "#000",

  /* OUTLINE */
  WebkitTextStroke: "0.2em #fff",
  paintOrder: "stroke fill",

  /* SHADOW */
  filter:
    "drop-shadow(0px clamp(2px, 1vw, 10px) clamp(1px, 0.2vw, 5px) rgba(0,0,0,0.55))",

  padding: "0 0.25em",
};

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  };

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 3,
        overflow: "hidden",
        bgcolor: slides[activeIndex].bg,
        transition: "background-color 600ms ease",
        py: { xs: 12, md: 12, lg: 18 },
        pb: { xs: 10, md: 12, lg: 15 },
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
            fontSize: {
              xs: "2.8rem",
              sm: "3.8rem",
              md: "clamp(36px, 6.0vw, 100px)",
            },
            lineHeight: 0.9,
          }}
        >
          <Box component="span" sx={stickerStyles}>
            Grocer, Together We Grow
          </Box>
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
              left: { xs: -12, md: -28 },
              width: { md: 64 },
              height: { md: 64 },
              bgcolor: slides[activeIndex].arrowBg,
              color: slides[activeIndex].arrowIcon,
              boxShadow: 4,
              transition: "all 300ms ease",

              "& svg": {
                fontSize: { md: "2.4rem" },
              },

              "&:hover": {
                bgcolor: slides[activeIndex].arrowHover,
                transform: "scale(1.08)",
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* IMAGE WRAPPER */}
          <Box
            component="img"
            src={slides[activeIndex].image}
            alt="Community spotlight"
            sx={{
              width: { xs: 260, md: 380 },
              maxWidth: "100%",
              borderRadius: 4,
              zIndex: 1,

              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",

              /* 🔥 FLIP ANIMATION */
              transform: isAnimating
                ? "rotateY(90deg) scale(0.95)"
                : "rotateY(0deg) scale(1)",

              opacity: isAnimating ? 0 : 1,

              transition: "transform 500ms ease, opacity 500ms ease",

              boxShadow: "0 20px 40px rgba(0,0,0,0.25)",

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
              right: { xs: -12, md: -28 },
              width: { md: 64 },
              height: { md: 64 },
              bgcolor: slides[activeIndex].arrowBg,
              color: slides[activeIndex].arrowIcon,
              boxShadow: 4,
              transition: "all 300ms ease",

              "& svg": {
                fontSize: { md: "2.4rem" },
              },

              "&:hover": {
                bgcolor: slides[activeIndex].arrowHover,
                transform: "scale(1.08)",
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* ================= CTA ================= */}
        <Box textAlign="center" mt={6}>
          <Button
            sx={{
              position: "relative",

              // 🔥 THIS is the key
              py: { xs: 3, md: 3.5 }, // more top/bottom padding
              px: { xs: 6, md: 9 },
              minHeight: { xs: 80, md: 90 },

              color: slides[activeIndex].buttonBg,
              background: "transparent",
              boxShadow: "none",
              textTransform: "none",
              fontWeight: 800,
              fontSize: { xs: "1rem", md: "1.3rem" },

              "&:hover": {
                color: slides[activeIndex].buttonHover,
                transform: "translateY(-2px)",
              },
            }}
          >
            {/* SVG Ribbon */}
            <Box
              component="svg"
              viewBox="0 0 750 180"
              preserveAspectRatio="xMidYMid meet"
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",

                width: "110%", // 🔥 controls ribbon thickness
                height: "auto", // 🔥 CRITICAL: prevents vertical squish
                maxHeight: "100%",

                zIndex: -1,
                pointerEvents: "none",
              }}
            >
              <path
                d="M740 160c-404-22.1-338.3-21.5-730 0l30-70-30-70c404 22.1 338.3 21.5 730 0l-30 70 30 70Z"
                fill="currentColor"
              />
            </Box>

            {/* Button Text */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                color: slides[activeIndex].buttonText,
              }}
            >
              Join as Store
            </Box>
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
