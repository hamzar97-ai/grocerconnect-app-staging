"use client";

import { Box, Typography, Link, Stack } from "@mui/material";
import NextLink from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#FDECEC",
        backgroundImage: `
          radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
          radial-gradient(rgba(0,0,0,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "16px 16px, 32px 32px",
        backgroundPosition: "0 0, 8px 8px",
        pt: { xs: 10, md: 14 },
      }}
    >
      {/* TOP CONTENT */}
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          px: { xs: 3, md: 6 },
          pb: { xs: 8, md: 10 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.4fr 1fr 1fr 1fr",
          },
          gap: { xs: 6, md: 8 },
        }}
      >
        {/* LOGO COLUMN */}
        <Box>
          <Box component={NextLink} href="/" sx={{ display: "inline-block" }}>
            <Box
              component="img"
              src="/assets/images/NGA-logo.png"
              alt="National Grocers Association"
              sx={{ width: 180, mb: 3 }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "1.05rem",
              fontWeight: 700,
              lineHeight: 1.6,
              color: "#111",
              maxWidth: 260,
            }}
          >
            Supporting independent grocers nationwide and strengthening
            communities through collaboration and advocacy.
          </Typography>
        </Box>

        {/* COMPANY */}
        <FooterColumn
          title="Company"
          links={[
            { label: "Privacy Policy", href: "" },
            { label: "Terms of Service", href: "" },
          ]}
        />

        {/* HOME */}
        <FooterColumn
          title="Home"
          links={[
            { label: "About Grocer Connect", href: "/about" },
            { label: "Membership", href: "/membership" },
            { label: "Join GrocerConnect", href: "/onboarding" },
            { label: "Login", href: "/login" },
            { label: "Contact", href: "/contact" },
          ]}
        />

        {/* CONNECT */}
        <FooterColumn
          title="Connect"
          links={[
            { label: "Instagram", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Facebook", href: "#" },
          ]}
        />
      </Box>

      {/* BOTTOM BAR */}
      <Box sx={{ backgroundColor: "#E53935", py: 2.5 }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.95rem",
          }}
        >
          © Copyright by Grocer Connect. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

/* ---------------- HELPERS ---------------- */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: 900,
          mb: 2.5,
          color: "#111",
        }}
      >
        {title}
      </Typography>

      <Stack spacing={1.8}>
        {links.map((link) => (
          <Link
            key={link.label}
            component={NextLink}
            href={link.href}
            underline="none"
            sx={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "#111",
              transition: "all 250ms ease",
              "&:hover": {
                color: "#E53935",
                transform: "translateX(4px)",
              },
            }}
          >
            {link.label}
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
