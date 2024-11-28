import React from "react";
import { Box, Card, CardContent, Typography, Link } from "@mui/material";

const plans = [
  {
    id: 1,
    title: "Занятие № 1",
    description:
      "Способы выражения концентрации растворов. Титриметрический метод анализа (лабораторная работа).",
    url: "/lessons/01.php",
  },
  {
    id: 2,
    title: "Занятие № 2",
    description: "Химическая термодинамика.",
    url: "/lessons/02.php",
  },
];

const PlansPage: React.FC = () => {
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
          variant="h2"
          sx={{
            textAlign: "left",
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          План занятий
        </Typography>
        {plans.map((plan) => (
          <Card
            key={plan.id}
            sx={{
              marginBottom: "16px",
              backgroundColor: "#B0E0E6",
              border: "1px solid #000",
              borderRadius: "5px",
            }}
          >
            <CardContent>
              <Link
                href={plan.url}
                target="_blank"
                sx={{ textDecoration: "none", color: "#000" }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {plan.title}
                </Typography>
                <Typography variant="body1">{plan.description}</Typography>
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PlansPage;
