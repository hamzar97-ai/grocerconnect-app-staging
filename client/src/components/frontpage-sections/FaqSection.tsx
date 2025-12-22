"use client";

import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";

const faqs = [
  {
    question: "What exactly is this product?",
    answer:
      "This is dummy text for now. Our product is crafted with care, packed with good vibes, and designed to make you feel great from the inside out.",
    bg: "#7E57C2",
    color: "#FFF176",
  },
  {
    question: "Is it good for everyday use?",
    answer:
      "Absolutely. Dummy content here — it’s made to be enjoyed daily as part of a balanced and happy routine.",
    bg: "#FFF176",
    color: "#D32F2F",
  },
  {
    question: "Does it contain artificial ingredients?",
    answer:
      "Nope! This placeholder text says it’s all about keeping things simple, honest, and naturally enjoyable.",
    bg: "#43A047",
    color: "#E8F5E9",
  },
  {
    question: "Where is it made?",
    answer:
      "Dummy answer goes here. Crafted with love, care, and a lot of attention to quality.",
    bg: "#E53935",
    color: "#FFF",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Box
      sx={{
        backgroundColor: "#FFEDEA", // 🌟 warm cream
        backgroundImage: `
      radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
      radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)
    `,
        backgroundSize: "18px 18px, 36px 36px",
        backgroundPosition: "0 0, 9px 9px",
        py: { xs: 12, md: 16 },
      }}
    >
      {/* HEADING */}
      <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
        <Typography
          sx={{
            fontSize: { xs: "2.8rem", md: "4.2rem" },
            fontWeight: 900,
            color: "#e53935",
            letterSpacing: 2,
            textTransform: "uppercase",
            display: "inline-block",
            transform: "rotate(-2deg)",
            textShadow: "0 6px 0 rgba(0,0,0,0.25)",
          }}
        >
          Frequently Asked
        </Typography>
        <br />
        <Typography
          sx={{
            fontSize: { xs: "3rem", md: "4.6rem" },
            fontWeight: 900,
            color: "#000",
            backgroundColor: "#FFF176",
            px: 3,
            py: 1,
            display: "inline-block",
            borderRadius: "16px",
            transform: "rotate(1deg)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
        >
          Questions
        </Typography>
      </Box>

      {/* FAQ LIST */}
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          px: { xs: 2, md: 0 },
        }}
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <Box
              key={index}
              sx={{
                backgroundColor: faq.bg,
                color: faq.color,
                borderRadius: "28px",
                p: { xs: 3, md: 4 },
                boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
                transition: "transform 300ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              {/* QUESTION */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                    fontWeight: 900,
                  }}
                >
                  {faq.question}
                </Typography>

                <IconButton
                  sx={{
                    color: faq.color,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 300ms ease",
                  }}
                >
                  <KeyboardArrowDownRoundedIcon fontSize="large" />
                </IconButton>
              </Box>

              {/* ANSWER */}
              <Box
                sx={{
                  maxHeight: isOpen ? 300 : 0,
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 400ms ease, opacity 300ms ease",
                  mt: isOpen ? 2 : 0,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    fontWeight: 500,
                  }}
                >
                  {faq.answer}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
