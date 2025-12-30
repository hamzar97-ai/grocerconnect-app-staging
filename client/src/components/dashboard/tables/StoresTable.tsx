"use client";

import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useState } from "react";

import StatusChip from "../common/StatusChip";
import RowActionsMenu from "../common/RowActionsMenu";
import StoreDetailsDrawer from "../common/StoreDetailsDrawer";
import ConfirmActionDialog from "../common/ConfirmActionDialog";
import stores from "@/mock/stores";

export default function StoresTable() {
  const [selectedStore, setSelectedStore] = useState<any>(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [confirmType, setConfirmType] = useState<"approve" | "reject" | null>(
    null
  );

  return (
    <>
      <Box sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Store Name</strong>
              </TableCell>
              <TableCell>
                <strong>Location</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
              <TableCell>
                <strong>Subscription</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {stores.map((store) => (
              <TableRow key={store.id} hover>
                <TableCell>{store.name}</TableCell>
                <TableCell>{store.location}</TableCell>
                <TableCell>
                  <StatusChip status={store.status} />
                </TableCell>
                <TableCell>{store.subscription}</TableCell>
                <TableCell align="right">
                  <RowActionsMenu
                    status={store.status}
                    onView={() => {
                      setSelectedStore(store);
                      setOpenDrawer(true);
                    }}
                    onApprove={() => {
                      setSelectedStore(store);
                      setOpenDrawer(true);
                    }}
                    onReject={() => {
                      setSelectedStore(store);
                      setOpenDrawer(true);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* Store Drawer */}
      <StoreDetailsDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        store={selectedStore}
      />

      {/* Confirmation Dialog */}
      <ConfirmActionDialog
        open={Boolean(confirmType)}
        title={confirmType === "approve" ? "Approve Store" : "Reject Store"}
        description={`Are you sure you want to ${
          confirmType === "approve" ? "approve" : "reject"
        } this store?`}
        confirmText={confirmType === "approve" ? "Approve" : "Reject"}
        confirmColor={confirmType === "approve" ? "success" : "error"}
        onConfirm={() => {
          console.log(confirmType, selectedStore);
          // later → API call
        }}
        onClose={() => setConfirmType(null)}
      />
    </>
  );
}
