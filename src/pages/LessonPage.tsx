import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const lessons: Record<string, { title: string; content: string }> = {
  "01": {
    title: "Занятие № 1",
    content: `
      Способы выражения концентрации растворов. 
      Титриметрический метод анализа (лабораторная работа).
      
      Вопросы для подготовки:
      1.1. Техника безопасности при работе в химической лаборатории.
      1.2. Способы выражения концентрации растворов.
    `,
  },
  "02": {
    title: "Занятие № 2",
    content: "Химическая термодинамика.",
  },
  "03": {
    title: "Занятие № 3",
    content: "Химическая кинетика. Химическое равновесие.",
  },
};

const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = lessons[lessonId || ""];

  if (!lesson) {
    return (
      <Box>
        <Typography variant="h4">Занятие не найдено</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "#AFC8AF",
        padding: "20px",
        border: "2px solid #ccc",
        maxWidth: "90%",
        margin: "20px auto",
        boxSizing: "border-box",
        fontFamily: "serif",
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        {lesson.title}
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
        {lesson.content}
      </Typography>
    </Box>
  );
};

export default LessonPage;
