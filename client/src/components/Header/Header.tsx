"use client";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  useMediaQuery,
  Dialog,
  DialogContent,
  TextField,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const topBarLinks = ["Technical Assistance Center", "Foundation"];

const navLinks = [
  "About",
  "Join",
  "Advocacy",
  "Education",
  "Partnerships",
  "News & Events",
  "Programs",
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <AppBar position="static" color="inherit" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "flex-end",
              gap: 1,
              minHeight: 48,
            }}
          >
            {/* Desktop-only links */}
            {!isMobile &&
              topBarLinks.map((text) => (
                <Button key={text} size="small">
                  {text}
                </Button>
              ))}

            {/* Always visible */}
            <Button variant="contained" color="secondary" size="small">
              Join NGA
            </Button>

            <Button variant="outlined" size="small">
              Member Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ================= MAIN NAV ================= */}
      <AppBar
        position="sticky"
        color="primary"
        sx={{
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* LOGO */}
            <Typography variant="h6" fontWeight={700}>
              GrocerConnect
            </Typography>

            {/* DESKTOP NAV */}
            {!isMobile && (
              <Box display="flex" alignItems="center" gap={3}>
                {navLinks.map((link) => (
                  <Button key={link} color="inherit" sx={{ fontWeight: 600 }}>
                    {link}
                  </Button>
                ))}
                <IconButton
                  color="secondary"
                  onClick={() => setSearchOpen(true)}
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            )}

            {/* MOBILE NAV */}
            {isMobile && (
              <>
                <IconButton color="inherit" onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>

                <Drawer
                  anchor="right"
                  open={open}
                  onClose={() => setOpen(false)}
                >
                  <Box sx={{ width: 300 }}>
                    <List>
                      {/* TOP BAR LINKS */}
                      {topBarLinks.map((text) => (
                        <ListItem key={text} disablePadding>
                          <ListItemButton onClick={() => setOpen(false)}>
                            <ListItemText primary={text} />
                          </ListItemButton>
                        </ListItem>
                      ))}

                      <ListItem disablePadding>
                        <ListItemButton onClick={() => setOpen(false)}>
                          <ListItemText primary="Join NGA" />
                        </ListItemButton>
                      </ListItem>

                      <ListItem disablePadding>
                        <ListItemButton onClick={() => setOpen(false)}>
                          <ListItemText primary="Member Login" />
                        </ListItemButton>
                      </ListItem>

                      <Box sx={{ my: 1, borderBottom: "1px solid #e0e0e0" }} />

                      {/* MAIN NAV LINKS */}
                      {navLinks.map((text) => (
                        <ListItem key={text} disablePadding>
                          <ListItemButton onClick={() => setOpen(false)}>
                            <ListItemText primary={text} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {/* ================= SEARCH POPUP ================= */}
      <Dialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent sx={{ p: 0 }}>
          {/* Top Accent Bar */}
          <Box
            sx={{
              height: 6,
              bgcolor: "primary.main",
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />

          <Box sx={{ p: 4, position: "relative" }}>
            {/* Close button */}
            <IconButton
              onClick={() => setSearchOpen(false)}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                color: "text.secondary",
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Title */}
            <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
              Search GrocerConnect
            </Typography>

            {/* Helper text */}
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Find programs, resources, education, and more.
            </Typography>

            {/* Search Input */}
            <TextField
              autoFocus
              fullWidth
              placeholder="Search GrocerConnect..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 2,
                  bgcolor: "background.paper",
                },
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
