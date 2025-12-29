"use client";

import { Box, TextField, Typography, MenuItem, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface StepOneProps {
  data: any;
  setData: (data: any) => void;
  onNext: () => void;
}

export default function StepOne({ data, setData, onNext }: StepOneProps) {
  const [errors, setErrors] = useState<{
    storeName?: string;
    storeType?: string;
    monthlyVolume?: string;
  }>({});

  const handleContinue = () => {
    const newErrors: typeof errors = {};

    if (!data.storeName.trim()) {
      newErrors.storeName = "Please enter your store’s name";
    }

    if (!data.storeType) {
      newErrors.storeType = "Select the type that best describes your store";
    }

    if (!data.monthlyVolume) {
      newErrors.monthlyVolume = "This helps us tailor recommendations for you";
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
          Tell us about your store
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Just the basics — this will only take a minute.
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Store Name"
            placeholder="e.g. Fresh Mart"
            fullWidth
            value={data.storeName}
            error={Boolean(errors.storeName)}
            helperText={errors.storeName}
            onChange={(e) => setData({ ...data, storeName: e.target.value })}
          />

          <TextField
            select
            label="Store Type"
            fullWidth
            value={data.storeType}
            error={Boolean(errors.storeType)}
            helperText={errors.storeType}
            onChange={(e) => setData({ ...data, storeType: e.target.value })}
          >
            <MenuItem value="grocery">Grocery Store</MenuItem>
            <MenuItem value="convenience">Convenience Store</MenuItem>
            <MenuItem value="supermarket">Supermarket</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>

          <TextField
            select
            label="Monthly Purchasing Volume"
            fullWidth
            value={data.monthlyVolume}
            error={Boolean(errors.monthlyVolume)}
            helperText={errors.monthlyVolume}
            onChange={(e) =>
              setData({ ...data, monthlyVolume: e.target.value })
            }
          >
            <MenuItem value="lt10k">Less than $10,000</MenuItem>
            <MenuItem value="10k-50k">$10,000 – $50,000</MenuItem>
            <MenuItem value="50k-100k">$50,000 – $100,000</MenuItem>
            <MenuItem value="gt100k">More than $100,000</MenuItem>
          </TextField>

          <Button
            size="large"
            variant="contained"
            sx={{ mt: 2, alignSelf: "flex-start", px: 5 }}
            onClick={handleContinue}
          >
            Continue
          </Button>
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
            src="/assets/images/12468696.png"
            alt="Store onboarding illustration"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
