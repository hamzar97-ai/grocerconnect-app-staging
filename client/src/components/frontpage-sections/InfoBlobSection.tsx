"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface InfoBlobSectionProps {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  reverse?: boolean;
  textColor?: string;
}

export default function InfoBlobSection({
  title,
  description,
  image,
  bgColor,
  reverse = false,
  textColor = "#000",
}: InfoBlobSectionProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  /* ---------- Active card detection ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.intersectionRatio > 0.6);
      },
      { threshold: [0.6] }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    /* STICKY STACK SECTION */
    <Box
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        height: { xs: "auto", md: "100vh" },
        position: { xs: "relative", md: "sticky" },
        top: { md: 0 },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 0 },

        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: isActive ? "50% 40%" : "50% 50%",
        transition: "background-position 600ms ease",
      }}
    >
      {/* CARD */}
      <Box
        ref={cardRef}
        sx={{
          width: "100%",
          maxWidth: 1200,
          minHeight: { xs: "auto", md: "calc(90vh - 96px)" },
          bgcolor: bgColor,

          p: { xs: 3, sm: 4, md: 8 },

          display: "flex",
          flexDirection: {
            xs: "column",
            md: reverse ? "row-reverse" : "row",
          },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },

          /* 🔥 STACKING MAGIC (DESKTOP ONLY) */
          transform: {
            xs: "none",
            md: isActive
              ? "translateY(0) rotate(0deg) scale(1)"
              : "translateY(22px) rotate(-2.2deg) scale(0.96)",
          },

          boxShadow: isActive
            ? "0 28px 80px rgba(0,0,0,0.45)"
            : "0 18px 40px rgba(0,0,0,0.25)",

          opacity: isActive ? 1 : 0.85,

          filter: {
            xs: "none",
            md: isActive ? "blur(0)" : "blur(0.3px)",
          },

          transition:
            "transform 600ms cubic-bezier(.22,.61,.36,1), box-shadow 500ms ease, opacity 400ms ease, filter 400ms ease",

          "&:hover": {
            transform: {
              xs: "none",
              md: isActive
                ? "scale(1.02)"
                : "translateY(18px) rotate(-2deg) scale(0.98)",
            },
          },

          /* WAVY MASK (DISABLED ON MOBILE FOR PERFORMANCE) */
          maskImage: {
            xs: "none",
            md: "url(/assets/images/micha-about-card-mask.svg)",
          },
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "cover",

          WebkitMaskImage: {
            xs: "none",
            md: "url(/assets/images/micha-about-card-mask.svg)",
          },
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "cover",

          borderRadius: { xs: 4, md: 0 },
        }}
      >
        {/* IMAGE */}
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: { xs: 160, sm: 200, md: 320 },
            maxWidth: "80vw",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            flexShrink: 0,

            borderRadius: "50% 45% 55% 50% / 55% 50% 50% 45%",
            boxShadow: "0 18px 40px rgba(0,0,0,0.35)",

            transform: {
              xs: "none",
              md: isActive ? "translateY(-6px)" : "translateY(0)",
            },
            transition: "transform 500ms ease",

            "&:hover": {
              transform: { md: "translateY(-12px) scale(1.04)" },
            },
          }}
        />

        {/* TEXT */}
        <Box sx={{ maxWidth: 560 }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-passion)",
              fontWeight: 700,
              color: "#000",

              fontSize: {
                xs: "2.1rem",
                sm: "2.6rem",
                md: "4.6rem",
              },

              lineHeight: 1.05,

              WebkitTextStroke: {
                xs: "0.1em #fff",
                md: "0.18em #fff",
              },
              paintOrder: "stroke fill",

              filter:
                "drop-shadow(0px clamp(2px, 0.8vw, 8px) clamp(1px, 0.2vw, 4px) rgba(0,0,0,0.45))",

              padding: "0 0.2em",
              mb: { xs: 2, md: 3 },
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.6,
              fontWeight: 500,
              color: textColor,
              maxWidth: 520,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
