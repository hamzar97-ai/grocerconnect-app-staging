"use client";

import { Box, TextField, Typography, MenuItem, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface StepTwoProps {
  data: any;
  setData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepTwo({
  data,
  setData,
  onNext,
  onBack,
}: StepTwoProps) {
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    phone?: string;
    role?: string;
  }>({});

  const handleContinue = () => {
    const newErrors: typeof errors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Please tell us who we should contact";
    }

    if (!data.email.trim()) {
      newErrors.email = "We’ll need an email to reach you";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "That doesn’t look like a valid email";
    }

    const cleanedPhone = data.phone.replace(/\s/g, "");

    if (!cleanedPhone) {
      newErrors.phone = "A phone number helps if we need to reach you quickly";
    } else if (!/^\+?\d{8,15}$/.test(cleanedPhone)) {
      newErrors.phone = "Enter a valid international phone number";
    }

    if (!data.role) {
      newErrors.role = "Select the role that best fits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext();
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
        gap: { xs: 4, md: 6 },
        alignItems: "center",
        maxWidth: 1100,
        mx: "auto",
        width: "100%",
      }}
    >
      {/* LEFT — FORM */}
      <Box>
        <Typography
          variant="h3"
          color="primary.main"
          fontWeight={700}
          sx={{ mb: 1, fontSize: { xs: "1.8rem", md: "2.5rem" } }}
        >
          Who should we contact?
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          This will be the primary person managing the store account.
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Full Name"
            placeholder="e.g. John Smith"
            fullWidth
            value={data.fullName}
            error={Boolean(errors.fullName)}
            helperText={errors.fullName}
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
          />

          <TextField
            label="Email Address"
            placeholder="e.g. john@store.com"
            type="email"
            fullWidth
            value={data.email}
            error={Boolean(errors.email)}
            helperText={errors.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <TextField
            label="Phone Number"
            placeholder="e.g. +1 555 123 4567"
            fullWidth
            value={data.phone}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            inputProps={{
              inputMode: "tel", // mobile numeric keypad
              maxLength: 16, // + + 15 digits
            }}
            onChange={(e) => {
              const value = e.target.value;

              // Allow only +, digits, and spaces
              if (/^[+\d\s]*$/.test(value)) {
                setData({ ...data, phone: value });
              }
            }}
          />

          <TextField
            select
            label="Role"
            fullWidth
            value={data.role}
            error={Boolean(errors.role)}
            helperText={errors.role}
            onChange={(e) => setData({ ...data, role: e.target.value })}
          >
            <MenuItem value="supplier">Supplier</MenuItem>
            <MenuItem value="manager">Store Manager</MenuItem>
            <MenuItem value="admin">Administrator</MenuItem>
          </TextField>

          {/* ACTIONS */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              mt: 3,
            }}
          >
            <Button
              variant="outlined"
              size="large"
              onClick={onBack}
              sx={{ px: 4 }}
            >
              Back
            </Button>

            <Button
              variant="contained"
              size="large"
              sx={{ px: 5 }}
              onClick={handleContinue}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>

      {/* RIGHT — ILLUSTRATION */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-12px)" },
              "100%": { transform: "translateY(0)" },
            },
          }}
        >
          <Image
            src="/assets/images/12083363.png"
            alt="Contact details illustration"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
