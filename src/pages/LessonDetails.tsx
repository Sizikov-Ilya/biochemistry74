import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import lesson1 from "../lessons/lesson1";
import lesson2 from "../lessons/lesson2";
import lesson3 from "../lessons/lesson3";
import lesson4 from "../lessons/lesson4";
import lesson5 from "../lessons/lesson5";
import lesson6 from "../lessons/lesson6";
import lesson7 from "../lessons/lesson7";
import lesson8 from "../lessons/lesson8";
import lesson9 from "../lessons/lesson9";
import lesson10 from "../lessons/lesson10";
import lesson11 from "../lessons/lesson11";
import lesson12 from "../lessons/lesson12";
import lesson13 from "../lessons/lesson13";
import lesson14 from "../lessons/lesson14";
import lesson15 from "../lessons/lesson15";
import lesson16 from "../lessons/lesson16";

const lessons: Record<string, { title: string; content: string }> = {
  "1": lesson1,
  "2": lesson2,
  "3": lesson3,
  "4": lesson4,
  "5": lesson5,
  "6": lesson6,
  "7": lesson7,
  "8": lesson8,
  "9": lesson9,
  "10": lesson10,
  "11": lesson11,
  "12": lesson12,
  "13": lesson13,
  "14": lesson14,
  "15": lesson15,
  "16": lesson16,
};

const LessonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lesson = lessons[id || "1"];

  return (
    <Box
      sx={{
        backgroundColor: "#AFC8AF",
        padding: "20px",
        border: "2px solid #ccc",
        maxWidth: "90%",
        minHeight: "100vh",
        margin: "0 auto",
        boxSizing: "border-box",
        fontFamily: "serif",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: "18pt",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Занятие № {id}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          textAlign: "left",
          fontSize: "18pt",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        {lesson?.title || "Информация о занятии недоступна"}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "14pt",
          textAlign: "left",
          whiteSpace: "pre-line",
        }}
      >
        {lesson?.content || "Контент для этого занятия отсутствует."}
      </Typography>
    </Box>
  );
};

export default LessonDetails;
