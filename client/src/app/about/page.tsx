"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Fade,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import DottedSection from "@/components/DottedSection";

import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "swiper/css";
import "swiper/css/navigation";

/* ================= TEAM DATA ================= */
const teamMembers = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    gender: "male",
    description:
      "Driving GrocerConnect’s mission to empower independent grocers through innovation.",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Lee",
    role: "Operations Lead",
    gender: "female",
    description: "Ensuring smooth operations and building strong partnerships.",
    socials: {
      linkedin: "#",
    },
  },
  {
    name: "David Patel",
    role: "Technology Lead",
    gender: "male",
    description:
      "Building scalable, secure technology that powers local businesses.",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    gender: "male",
    description:
      "Driving GrocerConnect’s mission to empower independent grocers through innovation.",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Lee",
    role: "Operations Lead",
    gender: "female",
    description: "Ensuring smooth operations and building strong partnerships.",
    socials: {
      linkedin: "#",
    },
  },
  {
    name: "David Patel",
    role: "Technology Lead",
    gender: "male",
    description:
      "Building scalable, secure technology that powers local businesses.",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
];

/* ================= FLIP CARD ================= */
function TeamFlipCard({ member }: any) {
  return (
    <Box sx={{ perspective: "1200px", height: 360 }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 700ms cubic-bezier(0.4,0,0.2,1)",
          "&:hover": {
            transform: "rotateY(180deg)",
          },
        }}
      >
        {/* FRONT */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: 4,
            bgcolor: "background.paper",
            boxShadow: "0 14px 34px rgba(0,0,0,0.12)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={
              member.gender === "female"
                ? "/assets/images/woman.png"
                : "/assets/images/man.png"
            }
            alt={member.name}
            width={120}
            height={120}
            style={{
              borderRadius: "50%",
              border: "4px solid #F08C00",
              marginBottom: 16,
            }}
          />

          <Typography variant="h6" fontWeight={700}>
            {member.name}
          </Typography>
        </Box>

        {/* BACK */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 4,
            bgcolor: "primary.main",
            color: "#fff",
            p: 4,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" fontWeight={700}>
            {member.role}
          </Typography>

          <Typography sx={{ mt: 1, mb: 3, opacity: 0.9 }}>
            {member.description}
          </Typography>

          <Box>
            {member.socials.linkedin && (
              <IconButton href={member.socials.linkedin} sx={{ color: "#fff" }}>
                <LinkedInIcon />
              </IconButton>
            )}
            {member.socials.twitter && (
              <IconButton href={member.socials.twitter} sx={{ color: "#fff" }}>
                <TwitterIcon />
              </IconButton>
            )}
            {member.socials.github && (
              <IconButton href={member.socials.github} sx={{ color: "#fff" }}>
                <GitHubIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function AboutPage() {
  const missionCards = [
    {
      title: "Our Mission",
      text: "To empower independent grocers by strengthening their ability to compete, grow, and serve their communities effectively.",
      bg: "secondary.main",
      icon: <TrackChangesIcon fontSize="large" />,
    },
    {
      title: "Our Vision",
      text: "A future where independent grocery stores thrive as essential, sustainable, and innovative pillars of local communities.",
      bg: "info.main",
      icon: <VisibilityIcon fontSize="large" />,
    },
    {
      title: "Our Values",
      text: "Community first, fairness in competition, collaboration, transparency, and long-term sustainability.",
      bg: "success.main",
      icon: <FavoriteIcon fontSize="large" />,
    },
  ];

  return (
    <Box>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "#fff",
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{ fontFamily: "var(--font-passion)", mb: 2 }}
          >
            About GrocerConnect
          </Typography>

          <Typography sx={{ maxWidth: 700, mx: "auto", fontSize: "1.1rem" }}>
            Connecting independent grocers, strengthening communities, and
            empowering local businesses to thrive together.
          </Typography>
        </Container>
      </Box>

      <DottedSection>
        {/* ================= WHO WE ARE ================= */}
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Fade in timeout={800}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 6,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "error.main",
                  color: "#fff",
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  boxShadow: "0 14px 34px rgba(224,49,49,0.35)",
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Who We Are
                </Typography>

                <Typography sx={{ lineHeight: 1.8, opacity: 0.95 }}>
                  {" "}
                  GrocerConnect is a platform designed to support independent
                  community grocers by providing access to tools, resources,
                  partnerships, and insights that help them compete in an
                  ever-changing retail landscape. <br /> <br /> We believe local
                  grocers are the backbone of neighborhoods — offering fresh
                  food, personal service, and strong community ties.
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 300,
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/assets/images/15866.jpg"
                  alt="Independent grocers"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Fade>
        </Container>

        {/* ================= MISSION ================= */}
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 4,
            }}
          >
            {missionCards.map((item, i) => (
              <Fade in timeout={600 + i * 200} key={i}>
                {/* 🔥 HOVER WRAPPER (handles motion smoothly) */}
                <Box
                  sx={{
                    height: "100%",
                    transition: "transform 400ms cubic-bezier(0.4,0,0.2,1)",
                    willChange: "transform",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      backgroundColor: item.bg,
                      color: "#fff",
                      borderRadius: 4,
                      boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
                      transition: "box-shadow 300ms ease",
                      "&:hover": {
                        boxShadow: "0 22px 48px rgba(0,0,0,0.35)",
                      },
                    }}
                  >
                    <CardContent>
                      {item.icon}

                      <Typography variant="h5" fontWeight={700} mt={2}>
                        {item.title}
                      </Typography>

                      <Typography sx={{ opacity: 0.95 }}>
                        {item.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Fade>
            ))}
          </Box>
        </Container>

        {/* ================= TEAM CAROUSEL ================= */}
        <Container maxWidth={false} sx={{ py: { xs: 6, md: 10 } }}>
          <Typography
            textAlign="center"
            sx={{
              fontFamily: "var(--font-passion)",
              fontSize: { xs: "2.2rem", md: "3rem" },
              color: "info.main",
              mb: 1,
            }}
          >
            Meet Our Team
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              mb: 6,
              maxWidth: 700,
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.05rem", md: "1.15rem" },
            }}
          >
            The people behind GrocerConnect.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* LEFT ARROW */}
            <IconButton
              className="team-prev"
              sx={{
                mr: 2,
                width: 52,
                height: 52,
                bgcolor: "error.main",
                color: "#fff",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                "&:hover": { bgcolor: "error.dark" },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>

            {/* SLIDER */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Swiper
                modules={[Autoplay, Navigation]}
                loop
                speed={900}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={32}
                slidesPerView={1}
                breakpoints={{
                  600: { slidesPerView: 2 },
                  900: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
                navigation={{
                  prevEl: ".team-prev",
                  nextEl: ".team-next",
                }}
                style={{
                  width: "100%", // 🔥 THIS FIXES EVERYTHING
                  padding: "40px 0",
                }}
              >
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={`${member.name}-${index}`}>
                    <TeamFlipCard member={member} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            {/* RIGHT ARROW */}
            <IconButton
              className="team-next"
              sx={{
                ml: 2,
                width: 52,
                height: 52,
                bgcolor: "info.main",
                color: "#fff",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                "&:hover": { bgcolor: "info.dark" },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Container>
      </DottedSection>
    </Box>
  );
}
