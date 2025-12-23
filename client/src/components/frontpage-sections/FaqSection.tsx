"use client";

import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

/* Dummy FAQ content */
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
        py: { xs: 12, md: 16 },
      }}
    >
      {/* HEADING */}
      <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
        <Typography
          sx={{
            fontSize: { xs: "2.4rem", md: "3.6rem" },
            fontFamily: "var(--font-passion)",
            backgroundColor: "#fff",
            color: "#000",
            display: "inline-block",
            px: { xs: 3, md: 5 },
            py: { xs: 1.5, md: 2 },
            borderRadius: "28px",
            boxShadow: "0 6px 0 rgba(0,0,0,0.25)",
            letterSpacing: "1px",
          }}
        >
          Frequently Asked Questions
        </Typography>
      </Box>

      {/* FAQ LIST */}
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

                /* CARD BEHAVIOR */
                backgroundColor: isOpen
                  ? theme.palette.info.main
                  : theme.palette.warning.main,

                borderRadius: "32px",
                px: { xs: 3, md: 5 },
                py: isOpen ? { xs: 3, md: 4 } : { xs: 2.5, md: 1.5 },

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
                    fontSize: { xs: "1.05rem", md: "1.2rem" },
                    fontWeight: 900,
                    color: isOpen
                      ? theme.palette.warning.main
                      : theme.palette.error.main,
                  }}
                >
                  {faq.question}
                </Typography>

                <IconButton
                  sx={{
                    color: isOpen
                      ? theme.palette.warning.main
                      : theme.palette.error.main,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 300ms ease",
                  }}
                >
                  <KeyboardArrowDownRoundedIcon />
                </IconButton>
              </Box>

              {/* ANSWER (INSIDE SAME CARD) */}
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
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: theme.palette.warning.main,
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
