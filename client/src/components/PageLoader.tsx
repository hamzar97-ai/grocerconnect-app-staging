"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1600); // loader duration

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,

        /* BASE COLOR */
        backgroundColor: "#FDECEC",

        /* DOTTED + SOFT GLOW BACKGROUND */
        backgroundImage: `
      radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
      radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
      radial-gradient(circle at 30% 30%, rgba(229,57,53,0.08), transparent 40%),
      radial-gradient(circle at 70% 60%, rgba(126,87,194,0.08), transparent 45%)
    `,
        backgroundSize: "16px 16px, 32px 32px, 100% 100%, 100% 100%",
        backgroundPosition: "0 0, 8px 8px, center, center",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        animation: "fadeOut 1s ease forwards",
        animationDelay: "1.2s",

        "@keyframes fadeOut": {
          to: {
            opacity: 0,
            visibility: "hidden",
          },
        },
      }}
    >
      {/* LOADER ICON */}
      <Box
        sx={{
          transform: "scale(1)",
          animation: "scaleOut 1s ease forwards",
          animationDelay: "1.2s",

          "@keyframes scaleOut": {
            to: {
              transform: "scale(0.6)",
              opacity: 0,
            },
          },
        }}
      >
        {/* INLINE SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="90"
          height="90"
        >
          {/* OUTER RING */}
          <path
            fill="#E53935"
            d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9
            c-21.3,8.4-45.4-2-53.8-23.3c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </path>

          {/* MIDDLE RING */}
          <path
            fill="#7E57C2"
            d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5
            c8.8-6.5,10.6-19,4.1-27.7c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="-360 50 50"
              dur="1.4s"
              repeatCount="indefinite"
            />
          </path>

          {/* INNER RING */}
          <path
            fill="#43A047"
            d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4
            c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5L82,35.7z"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </Box>
    </Box>
  );
}
