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

  /* ---------- Active card detection (focus + sharpness) ---------- */
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
        height: "100vh",
        position: "sticky",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 6 },
        /* background parallax feel */
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: isActive ? "50% 40%" : "50% 50%",
        transition: "background-position 600ms ease",
      }}
    >
      {/* CARD WITH SVG MASK WAVES */}
      <Box
        ref={cardRef}
        sx={{
          width: "100%",
          maxWidth: 1200,
          minHeight: "calc(90vh - 96px)",
          bgcolor: bgColor,
          p: { xs: 4, md: 8 },
          display: "flex",
          flexDirection: {
            xs: "column",
            md: reverse ? "row-reverse" : "row",
          },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
          /* focus / depth */
          boxShadow: isActive
            ? "0 28px 80px rgba(0,0,0,0.45)"
            : "0 18px 40px rgba(0,0,0,0.25)",
          opacity: isActive ? 1 : 0.75,
          filter: isActive ? "blur(0)" : "blur(0.4px)",
          transform: isActive ? "scale(1)" : "scale(0.97)",
          transition:
            "transform 500ms ease, box-shadow 500ms ease, opacity 400ms ease, filter 400ms ease",
          /* hover tilt micro-interaction */
          "&:hover": {
            transform: "scale(1.02)",
          },
          /* SVG MASK IMAGE FOR WAVY BORDERS */
          maskImage: "url(/assets/images/micha-about-card-mask.svg)",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "cover",
          WebkitMaskImage: "url(/assets/images/micha-about-card-mask.svg)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "cover",
        }}
      >
        {/* IMAGE */}
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: { xs: 220, md: 320 },
            aspectRatio: "1 / 1",
            objectFit: "cover",
            flexShrink: 0,
            borderRadius: "50% 45% 55% 50% / 55% 50% 50% 45%",
            boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
            /* image parallax + hover lift */
            transform: isActive ? "translateY(-6px)" : "translateY(0)",
            transition: "transform 500ms ease",
            "&:hover": {
              transform: "translateY(-12px) scale(1.04)",
            },
          }}
        />

        {/* TEXT */}
        <Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-fredoka)",
              fontSize: { xs: "2.2rem", md: "3rem" },
              fontWeight: 900,
              mb: 2,
              color: "#000",
              textShadow: `
                -2px -2px 0 #fff,
                 2px -2px 0 #fff,
                -2px  2px 0 #fff,
                 2px  2px 0 #fff,
                 0px  6px 14px rgba(0,0,0,0.3)
              `,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.05rem" },
              lineHeight: 1.7,
              maxWidth: 520,
              color: textColor,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
