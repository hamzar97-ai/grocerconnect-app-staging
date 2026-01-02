"use client";

import { Typography, Box } from "@mui/material";
import { useState } from "react";
import StoresTable from "../tables/StoresTable";
import OrdersTable from "@/components/dashboard/tables/OrdersTable";

export default function DashboardOverview() {
  const [userRole] = useState<"admin" | "store">("store");

  return (
    <Box>
      {userRole === "admin" && (
        <>
          <Typography variant="h4" fontWeight={700} mb={2}>
            Grocery Stores
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            List of grocery stores registered on the platform
          </Typography>

          <StoresTable />
        </>
      )}

      {userRole === "store" && (
        <>
          <Typography variant="h4" fontWeight={700} mb={2}>
            My Orders
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Orders you have placed with suppliers
          </Typography>

          <OrdersTable />
        </>
      )}
    </Box>
  );
}
