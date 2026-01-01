"use client";

import { Box, TextField, Typography, Button } from "@mui/material";
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
  const [error, setError] = useState<string | null>(null);

  const handleContinue = () => {
    if (!data.address?.trim()) {
      setError("Please enter your store address");
      return;
    }

    setError(null);
    onNext();
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
          Where is your store located?
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          This helps us understand your business location.
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Store Address"
            placeholder="e.g. 123 Main Street, Toronto"
            fullWidth
            value={data.address || ""}
            error={Boolean(error)}
            helperText={error}
            onChange={(e) => setData({ ...data, address: e.target.value })}
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
            src="/assets/images/11667077.png"
            alt="Store location illustration"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
