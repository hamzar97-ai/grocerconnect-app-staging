"use client";

import { Box, TextField, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface StepThreeProps {
  data: any;
  setData: (data: any) => void;
  onBack: () => void;
  onFinish: () => void;
}

export default function StepThree({
  data,
  setData,
  onBack,
  onFinish,
}: StepThreeProps) {
  const [errors, setErrors] = useState<{
    phone?: string;
    registeredName?: string;
    tradingName?: string;
  }>({});

  const handleFinish = () => {
    const newErrors: typeof errors = {};

    const cleanedPhone = data.phone?.replace(/\s/g, "");

    if (!cleanedPhone) {
      newErrors.phone = "Please enter a telephone number";
    } else if (!/^\+?\d{8,15}$/.test(cleanedPhone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!data.registeredName?.trim()) {
      newErrors.registeredName = "Registered business name is required";
    }

    if (!data.tradingName?.trim()) {
      newErrors.tradingName = "Trading name is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onFinish();
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
          Final details
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          We just need a few final details to complete your setup.
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Telephone Number"
            placeholder="e.g. +1 555 123 4567"
            fullWidth
            value={data.phone || ""}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            inputProps={{
              inputMode: "tel",
              maxLength: 16,
            }}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[+\d\s]*$/.test(value)) {
                setData({ ...data, phone: value });
              }
            }}
          />

          <TextField
            label="Registered Business Name"
            placeholder="e.g. Fresh Mart Holdings Ltd"
            fullWidth
            value={data.registeredName || ""}
            error={Boolean(errors.registeredName)}
            helperText={errors.registeredName}
            onChange={(e) =>
              setData({ ...data, registeredName: e.target.value })
            }
          />

          <TextField
            label="Trading Name"
            placeholder="e.g. Fresh Mart"
            fullWidth
            value={data.tradingName || ""}
            error={Boolean(errors.tradingName)}
            helperText={errors.tradingName}
            onChange={(e) => setData({ ...data, tradingName: e.target.value })}
          />

          {/* ACTIONS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <Button variant="outlined" size="large" onClick={onBack}>
              Back
            </Button>

            <Button
              variant="contained"
              size="large"
              sx={{ px: 5 }}
              onClick={handleFinish}
            >
              Finish setup
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
          }}
        >
          <Image
            src="/assets/images/11667077.png"
            alt="Final details illustration"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
