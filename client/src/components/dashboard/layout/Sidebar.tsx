import {
  Box,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#F1F8F4", // soft green tint
        borderRight: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      {/* Brand */}
      <Typography
        variant="h6"
        fontWeight={800}
        color="primary"
        sx={{ letterSpacing: 0.3 }}
      >
        GrocerConnect
      </Typography>

      <Divider sx={{ my: 2 }} />

      <List disablePadding>
        <ListItemButton
          selected
          sx={{
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
          <ListItemText primary="Stores" />
        </ListItemButton>

        <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
          <ListItemText primary="Suppliers" />
        </ListItemButton>

        <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
          <ListItemText primary="Reports" />
        </ListItemButton>

        <ListItemButton sx={{ borderRadius: 2 }}>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Box>
  );
}
