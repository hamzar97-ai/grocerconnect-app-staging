"use client";

import { Box, Typography, TextField, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

export default function ContactSection() {
  return (
    /* OUTER BEIGE BACKGROUND */
    <Box
      id="contact"
      sx={{
        position: "relative",
        backgroundColor: "#FDECEC",
        backgroundImage: `
          radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
          radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "16px 16px, 32px 32px",
        backgroundPosition: "0 0, 8px 8px",
        py: { xs: 4, md: 4 },
        overflow: "hidden",
        scrollMarginTop: "50px",
      }}
    >
      {/* INNER SECTION */}
      <Box
        sx={{
          maxWidth: 1700,
          mx: "auto",
          px: { xs: 2, md: "10%" },
          position: "relative",
          zIndex: 2,

          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 6, md: 0 },

          /* FULL-BLEED RED (DESKTOP ONLY) */
          "&::before": {
            content: '""',
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: 48,
            left: "calc(50% - 50vw)",
            width: "100vw",
            height: "88%",
            backgroundColor: "#EB373E",
            zIndex: -1,
          },
        }}
      >
        {/* LEFT TEXT */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            color: "#fff",
            py: { xs: 4, md: 6 },

            /* MOBILE/TABLET RED */
            backgroundColor: { xs: "#EB373E", md: "transparent" },
            borderRadius: { xs: "24px", md: 0 },
            px: { xs: 3, md: 0 },
          }}
        >
          {/* HEADING */}
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-passion)",
              fontWeight: 700,
              fontSize: {
                xs: "clamp(32px, 10vw, 56px)",
                md: "clamp(40px, 4.2vw, 96px)",
              },
              lineHeight: 0.95,
              mb: 3,
              color: "#000",
              WebkitTextStroke: "0.25em #fff",
              paintOrder: "stroke fill",
              filter:
                "drop-shadow(0px clamp(2px, 1vw, 10px) clamp(1px, 0.2vw, 5px) rgba(0,0,0,0.55))",
              px: "0.25em",
            }}
          >
            Get in Touch
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              fontFamily: "var(--font-jakarta)",
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              lineHeight: 1.8,
              mb: 3,
              maxWidth: 520,
            }}
          >
            Ready to strengthen your buying power?
            <br />
            Join GrocerConnect and become part of a network built to help
            independent grocers buy smarter and compete with scale.
          </Typography>

          {/* CONTACT BUTTONS */}
          {[
            {
              icon: <PhoneIcon sx={{ fontSize: 28 }} />,
              text: "+1 647 632 9295",
              href: "tel:+16476329295",
            },
            {
              icon: <EmailIcon sx={{ fontSize: 28 }} />,
              text: "contact@grocerconnect.ca",
              href: "mailto:contact@grocerconnect.ca",
            },
            {
              icon: <LanguageIcon sx={{ fontSize: 28 }} />,
              text: "grocerconnect.ca",
              href: "https://grocerconnect.ca",
            },
          ].map((item, i) => (
            <Box
              key={i}
              component="a"
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.3,
                backgroundColor: "#fff",
                color: "#000",
                px: 3,
                py: 1.6,
                borderRadius: "999px",
                mb: 1.5,

                /* 🔑 MOBILE FIX */
                width: { xs: "100%", sm: "fit-content" },
                maxWidth: "100%",
                overflow: "hidden",

                fontFamily: "var(--font-jakarta)",
                fontWeight: 700,
                fontSize: { xs: "0.9rem", md: "1.5rem" },
                textDecoration: "none",
              }}
            >
              {item.icon}
              {item.text}
            </Box>
          ))}

          {/* ADDRESS */}
          <Typography
            sx={{
              mt: 4,
              fontFamily: "var(--font-jakarta)",
              fontSize: { xs: "1.05rem", md: "1.5rem" },
              fontWeight: 600,
            }}
          >
            7070E Farrell Rd SE
            <br />
            Calgary, AB T2H 0T2
          </Typography>
        </Box>

        {/* FORM */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            backgroundColor: "#fff",
            borderRadius: { xs: "24px", md: "30px" },
            p: "clamp(20px, 3vw, 65px)",
            boxShadow: "0px 12px 40px rgba(0,0,0,0.15)",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {["Name", "Email", "Phone Number", "City", "Country"].map(
              (label) => (
                <TextField
                  key={label}
                  placeholder={label}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#FFF1F1",
                      borderRadius: "14px",
                    },
                    "& fieldset": { border: "none" },
                  }}
                />
              )
            )}

            <TextField
              placeholder="Message"
              multiline
              rows={5}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFF1F1",
                  borderRadius: "14px",
                },
                "& fieldset": { border: "none" },
              }}
            />

            <Button
              sx={{
                mt: 1,
                backgroundColor: "#EF3B3B",
                color: "#FFD400",
                fontFamily: "var(--font-fredoka)",
                fontWeight: 700,
                fontSize: "1.2rem",
                borderRadius: "999px",
                py: 1.6,
                "&:hover": {
                  backgroundColor: "#E22F2F",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
