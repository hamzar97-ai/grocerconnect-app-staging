"use client";

import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

/* FAQ CONTENT */
const faqs = [
  {
    question: "What is this product, exactly?",
    answer:
      "This is placeholder text. The product is thoughtfully made and designed to fit easily into everyday routines.",
  },
  {
    question: "What is actually inside the product?",
    answer:
      "Dummy content here. Ingredients are selected carefully with balance and quality in mind.",
  },
  {
    question: "Do you offer wholesale or bulk pricing?",
    answer:
      "Yes — placeholder answer. Wholesale and partnership options are available upon request.",
  },
  {
    question: "What makes this different from similar products?",
    answer:
      "This is sample text. The focus is on simplicity, consistency, and a great overall experience.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.error.main,
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        py: { xs: 12, md: 18 },
      }}
    >
      {/* ================= HEADING ================= */}
      <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
        <Typography
          component="div"
          sx={{
            fontFamily: "var(--font-passion)",
            fontWeight: 700,
            fontSize: { xs: "3rem", md: "6.5rem" },
            color: "#000",
            WebkitTextStroke: "0.18em #fff",
            paintOrder: "stroke fill",
            filter:
              "drop-shadow(0px clamp(2px,1vw,10px) clamp(1px,0.2vw,5px) rgba(0,0,0,0.55))",
            display: "inline-block",
            lineHeight: 0.9,
            px: 2,
          }}
        >
          Frequently Asked
        </Typography>
        <br />
        <Typography
          component="div"
          sx={{
            mt: 1,
            fontFamily: "var(--font-passion)",
            fontWeight: 700,
            fontSize: { xs: "3.2rem", md: "7rem" },
            color: "#000",
            WebkitTextStroke: "0.18em #fff",
            paintOrder: "stroke fill",
            filter:
              "drop-shadow(0px clamp(2px,1vw,10px) clamp(1px,0.2vw,5px) rgba(0,0,0,0.55))",
            display: "inline-block",
            transform: "rotate(-6deg)",
            lineHeight: 0.9,
            px: 2,
          }}
        >
          Questions
        </Typography>
      </Box>

      {/* ================= FAQ LIST ================= */}
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          px: { xs: 2, md: 0 },
        }}
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <Box
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              sx={{
                cursor: "pointer",
                backgroundColor: isOpen
                  ? theme.palette.info.main
                  : theme.palette.secondary.main, // YELLOW when inactive
                borderRadius: "40px",
                px: { xs: 3, md: 6 },
                py: isOpen ? { xs: 3.5, md: 5 } : { xs: 2.5, md: 3 },
                boxShadow: "0 6px 0 rgba(0,0,0,0.25)",
                transition: "background-color 300ms ease, padding 300ms ease",
                display: "flex",
                flexDirection: "column",
                gap: isOpen ? 2 : 0,
              }}
            >
              {/* QUESTION ROW */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.05rem", md: "1.45rem" },
                    fontFamily: "var(--font-fredoka)",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    color: isOpen
                      ? theme.palette.secondary.main
                      : theme.palette.error.main,
                  }}
                >
                  {faq.question}
                </Typography>

                <IconButton
                  sx={{
                    backgroundColor: isOpen
                      ? "transparent"
                      : theme.palette.error.main, // RED arrow bg when inactive
                    color: "#FFFFFF",
                    transform: isOpen
                      ? "rotate(180deg) scale(1.1)"
                      : "rotate(0deg)",
                    transition: "all 300ms cubic-bezier(.4,0,.2,1)",
                    "&:hover": {
                      backgroundColor: isOpen
                        ? "transparent"
                        : theme.palette.error.main,
                    },
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
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1.15rem" },
                    lineHeight: 1.8,
                    fontFamily: "var(--font-jakarta)",
                    color: theme.palette.secondary.main,
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
