"use client";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import orders from "@/mock/orders";

export default function OrdersTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <strong>Order ID</strong>
          </TableCell>
          <TableCell>
            <strong>Date</strong>
          </TableCell>
          <TableCell>
            <strong>Total</strong>
          </TableCell>
          <TableCell>
            <strong>Status</strong>
          </TableCell>
          <TableCell align="right">
            <strong>Actions</strong>
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id} hover>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell align="right">
              <IconButton size="small">
                <VisibilityIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
