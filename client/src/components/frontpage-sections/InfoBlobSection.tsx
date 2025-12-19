"use client";

import { Box, Container, Typography } from "@mui/material";

interface InfoBlobSectionProps {
  title: string;
  description: string;
  image: string;
  blobColor?: string;
  outerBg?: string;
  reverse?: boolean;
  overlapTop?: boolean; // 👈 NEW
  zIndex?: number; // 👈 NEW
}

export default function InfoBlobSection({
  title,
  description,
  image,
  blobColor = "#FFF176",
  outerBg = "#E53935",
  reverse = false,
  overlapTop = false,
  zIndex = 1,
}: InfoBlobSectionProps) {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: outerBg,
        py: { xs: 10, md: 14 },

        mt: overlapTop ? { xs: -10, md: -14 } : 0,
        pt: overlapTop ? { xs: 10, md: 14 } : 0,

        zIndex: overlapTop ? 2 : 1,
        overflow: "hidden",

        /* dotted background */
        backgroundImage: `
          radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
      }}
    >
      <Container maxWidth="lg">
        {/* INNER BLOB CARD */}
        <Box
          sx={{
            bgcolor: blobColor,
            borderRadius: "56px",
            px: { xs: 3, md: 8 },
            py: { xs: 5, md: 7 },
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: reverse ? "1.1fr 0.9fr" : "0.9fr 1.1fr",
              },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
            }}
          >
            {/* IMAGE */}
            <Box
              sx={{
                order: { xs: 1, md: reverse ? 2 : 1 },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                  width: { xs: 240, sm: 280, md: 320 },
                  aspectRatio: "1 / 1",
                  objectFit: "cover",

                  /* organic blob */
                  borderRadius: "50% 45% 55% 50% / 55% 50% 50% 45%",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.35)",

                  transition: "transform 400ms ease",

                  "&:hover": {
                    transform: "scale(1.05) rotate(-1deg)",
                  },
                }}
              />
            </Box>

            {/* TEXT */}
            <Box sx={{ order: { xs: 2, md: reverse ? 1 : 2 } }}>
              <Typography
                component="h2"
                sx={{
                  fontFamily: "var(--font-fredoka)",
                  fontSize: {
                    xs: "2.4rem",
                    sm: "2.8rem",
                    md: "3.2rem",
                  },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mb: 2,
                  color: "#000",
                  textShadow: `
                    -2px -2px 0 #ffffff,
                     2px -2px 0 #ffffff,
                    -2px  2px 0 #ffffff,
                     2px  2px 0 #ffffff,
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
                  fontWeight: 500,
                  color: "#111",
                  maxWidth: 520,
                }}
              >
                {description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
