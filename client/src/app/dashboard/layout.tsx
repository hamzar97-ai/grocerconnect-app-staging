import { Box } from "@mui/material";
import Sidebar from "@/components/dashboard/layout/Sidebar";
import Topbar from "@/components/dashboard/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#e7e7e7ff", // ✅ MiCha Yellow
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Topbar */}
        <Topbar />

        {/* Page content */}
        <Box
          sx={{
            p: { xs: 2, md: 4 },
            flexGrow: 1,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
