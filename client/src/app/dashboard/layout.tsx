import { Box } from "@mui/material";
import Sidebar from "@/components/dashboard/layout/Sidebar";
import Topbar from "@/components/dashboard/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "#F8F9FA",
        }}
      >
        <Topbar />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
}
