import { Box, Typography } from "@mui/material";
import StatsCard from "../widgets/StatsCard";

export default function DashboardOverview() {
  return (
    <>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Dashboard Overview
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        <StatsCard label="Total Stores" value={1204} color="primary" />

        <StatsCard label="Active Suppliers" value={142} color="success" />

        <StatsCard label="Pending Approvals" value={18} color="warning" />

        <StatsCard label="Active Subscriptions" value="98%" color="info" />
      </Box>
    </>
  );
}
