"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import PrintIcon from "@mui/icons-material/Print";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* 👀 SCROLL OBSERVER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        backgroundColor: "#D32F2F",
        backgroundImage: `
          radial-gradient(rgba(0, 0, 0, 0.35) 1px, transparent 1px),
          radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "16px 16px, 32px 32px",
        backgroundPosition: "0 0, 8px 8px",
        py: { xs: 12, md: 16 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
          gap: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
          alignItems: "stretch",
        }}
      >
        {/* LEFT COLUMN */}
        <Box
          sx={{
            backgroundColor: "#43A047 !important",
            color: "#fff",
            borderRadius: "32px",
            p: { xs: 5, md: 7 },
            boxShadow: "0 30px 70px rgba(0,0,0,0.25)",

            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-80px)",
            transition:
              "opacity 900ms ease, transform 900ms cubic-bezier(.22,.61,.36,1)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2.6rem", md: "3.4rem" },
              fontWeight: 900,
              mb: 3,
              textShadow: "0 4px 0 rgba(0,0,0,0.25)",
            }}
          >
            Let’s Connect
          </Typography>

          <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.7, mb: 5 }}>
            Have questions or want to collaborate with the National Grocers
            Association? Reach out — we’d love to hear from you.
          </Typography>

          {[
            {
              icon: <LocationOnIcon />,
              text: (
                <>
                  601 Pennsylvania Ave, NW
                  <br />
                  Suite 375N
                  <br />
                  Washington, D.C. 20004
                </>
              ),
            },
            { icon: <PhoneIcon />, text: "(202) 938 2570" },
            { icon: <PrintIcon />, text: "(202) 938 2574" },
            { icon: <EmailIcon />, text: "admin@nationalgrocers.org" },
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "flex-start",
                p: 2.8,
                mb: 2,
                borderRadius: "18px",
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(6px)",
                fontWeight: 600,
              }}
            >
              {item.icon}
              <Typography>{item.text}</Typography>
            </Box>
          ))}
        </Box>

        {/* RIGHT COLUMN */}
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "32px",
            p: { xs: 5, md: 6 },
            boxShadow: "0 30px 80px rgba(0,0,0,0.18)",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(80px)",
            transition:
              "opacity 900ms ease 120ms, transform 900ms cubic-bezier(.22,.61,.36,1)",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 900,
              mb: 1,
              color: "#111",
            }}
          >
            Send Us a Message
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: "0.95rem",
              mt: {
                xs: -1,
                sm: -4,
              },
            }}
          >
            Fill out the form and our team will get back to you shortly.
          </Typography>

          <Box>
            {["Name", "Email", "Phone", "Message"].map((label, i) => (
              <TextField
                key={i}
                fullWidth
                placeholder={label}
                multiline={label === "Message"}
                rows={label === "Message" ? 4 : 1}
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "16px",
                    backgroundColor: "#FFF4F4",
                  },
                }}
              />
            ))}
          </Box>

          <Button
            fullWidth
            sx={{
              mt: 3,
              py: 1.8,
              borderRadius: "20px",
              fontSize: "1.15rem",
              fontWeight: 900,
              textTransform: "uppercase",
              backgroundColor: "#E53935",
              color: "#fff",
              boxShadow: "0 6px 0 #9B1C1C",
              "&:hover": {
                backgroundColor: "#D32F2F",
                transform: "translateY(-2px)",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
