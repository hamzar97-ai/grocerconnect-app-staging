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

import suppliers from "@/mock/suppliers";
import StatusChip from "../common/StatusChip";

export default function SuppliersTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <strong>Supplier Name</strong>
          </TableCell>
          <TableCell>
            <strong>Category</strong>
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
        {suppliers.map((supplier) => (
          <TableRow key={supplier.id} hover>
            <TableCell>{supplier.name}</TableCell>
            <TableCell>{supplier.category}</TableCell>
            <TableCell>
              <StatusChip
                status={supplier.status === "active" ? "approved" : "rejected"}
              />
            </TableCell>
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
