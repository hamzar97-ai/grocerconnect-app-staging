import { Box, Typography } from "@mui/material";

export default function Topbar() {
  return (
    <Box
      sx={{
        height: 64,
        bgcolor: "background.paper",
        borderBottom: "1px solid #e6e6e6",
        display: "flex",
        alignItems: "center",
        px: 3,
      }}
    >
      <Typography variant="h6" fontWeight={600}>
        Dashboard
      </Typography>
    </Box>
  );
}
