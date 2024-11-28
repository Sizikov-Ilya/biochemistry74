import React from "react";
import { Typography, Box } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#B0C8B0",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFF",
          border: "2px solid #CCC",
          borderRadius: "5px",
          padding: "20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Добро пожаловать на сайт "Химия"
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "16px",
          }}
        >
          Выберите раздел: Лекции или План занятий
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
