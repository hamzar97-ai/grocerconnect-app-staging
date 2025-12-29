"use client";

import { Box, Typography, Button } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useRouter } from "next/navigation";

interface StepFourProps {
  email: string;
}

export default function StepFour({ email }: StepFourProps) {
  const router = useRouter();

  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: 700,
        mx: "auto",
        px: 2,
      }}
    >
      {/* ICON */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <CheckCircleRoundedIcon
          sx={{
            fontSize: 90,
            color: "success.main",
          }}
        />
      </Box>

      {/* TITLE */}
      <Typography
        variant="h3"
        fontWeight={700}
        color="primary.main"
        sx={{ mb: 1 }}
      >
        You’re all set!
      </Typography>

      {/* SUBTITLE */}
      <Typography color="text.secondary" sx={{ fontSize: "1.1rem", mb: 4 }}>
        Your store details have been submitted successfully.
      </Typography>

      {/* STORY MESSAGE */}
      <Box sx={{ mb: 5 }}>
        <Typography sx={{ mb: 1 }}>
          We’ve sent a verification link to:
        </Typography>

        <Typography fontWeight={600} color="info.main" sx={{ mb: 2 }}>
          {email || "your email address"}
        </Typography>

        <Typography color="text.secondary">
          Please check your inbox and click the link to activate your account.
          If you don’t see it, check your spam folder.
        </Typography>
      </Box>

      {/* ACTIONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="outlined"
          size="large"
          onClick={() => router.push("/")}
        >
          Go to homepage
        </Button>

        <Button
          variant="contained"
          size="large"
          onClick={() => window.location.reload()}
        >
          Resend email
        </Button>
      </Box>
    </Box>
  );
}
