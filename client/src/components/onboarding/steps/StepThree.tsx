"use client";

import { Box, TextField, Typography, MenuItem, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface StepThreeProps {
  data: any;
  setData: (data: any) => void;
  onBack: () => void;
  onFinish: () => void;
}

const CANADIAN_CITIES = [
  "Toronto",
  "Vancouver",
  "Montreal",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Mississauga",
  "Brampton",
  "Hamilton",
  "Waterloo",
  "Kitchener",
  "Guelph",
];

export default function StepThree({
  data,
  setData,
  onBack,
  onFinish,
}: StepThreeProps) {
  const [errors, setErrors] = useState<{
    address?: string;
    city?: string;
    postalCode?: string;
    communication?: string;
  }>({});

  const handleFinish = () => {
    const newErrors: typeof errors = {};

    if (!data.address?.trim()) {
      newErrors.address = "Please enter your store address";
    }

    if (!data.city) {
      newErrors.city = "Please select your city";
    }

    if (!data.postalCode?.trim()) {
      newErrors.postalCode = "Postal code is required";
    } else if (!/^[A-Z]\d[A-Z][ -]?\d[A-Z]\d$/i.test(data.postalCode)) {
      newErrors.postalCode = "Enter a valid Canadian postal code";
    }

    if (!data.communication) {
      newErrors.communication = "Please choose a preferred contact method";
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
          Almost done 🎉
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Just a few final details to complete your setup.
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Store Address"
            fullWidth
            value={data.address}
            error={Boolean(errors.address)}
            helperText={errors.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />

          <TextField
            select
            label="City"
            fullWidth
            value={data.city}
            error={Boolean(errors.city)}
            helperText={errors.city}
            onChange={(e) => setData({ ...data, city: e.target.value })}
          >
            {CANADIAN_CITIES.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>

          <TextField label="Country" value="Canada" disabled fullWidth />

          <TextField
            label="Postal Code"
            placeholder="e.g. M5V 3L9"
            fullWidth
            value={data.postalCode}
            error={Boolean(errors.postalCode)}
            helperText={errors.postalCode}
            onChange={(e) =>
              setData({
                ...data,
                postalCode: e.target.value.toUpperCase(),
              })
            }
          />

          <TextField
            select
            label="Preferred Communication"
            fullWidth
            value={data.communication}
            error={Boolean(errors.communication)}
            helperText={errors.communication}
            onChange={(e) =>
              setData({ ...data, communication: e.target.value })
            }
          >
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="phone">Phone</MenuItem>
          </TextField>

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
            alt="Finish setup illustration"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
