import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

const lectures = [
  {
    id: 1,
    title: "Конспект лекции № 7",
    description: "Часть 1. Физико-химические основы поверхностных явлений.",
    url: "https://biochemistry74.ru/lectures/07/lect07-1.pdf",
  },
  {
    id: 2,
    title: "Конспект лекции № 7",
    description:
      "Часть 2. Физико-химические свойства дисперсных систем. Физико-химические свойства растворов высокомолекулярных соединений.",
    url: "https://biochemistry74.ru/lectures/07/lect07-2.pdf",
  },
  {
    id: 3,
    title: "Конспект лекции № 8",
    description:
      "Части 1 и 2. Классификация и номенклатура органических соединений. Пространственное строение органических соединений.",
    url: "https://exp.biochemistry74.ru/lessons/lect08-1.pdf",
  },
  {
    id: 4,
    title: "Конспект лекции № 8",
    description: "Часть 3. Реакционная способность органических соединений.",
    url: "https://exp.biochemistry74.ru/lessons/lect08-2.pdf",
  },
  {
    id: 5,
    title: "Конспект лекции № 9",
    description:
      "Часть 1. Биологически важные поли- и гетерофункциональные соединения.",
    url: "https://biochemistry74.ru/lectures/09/lect09-1.pdf",
  },
  {
    id: 6,
    title: "Конспект лекции № 9",
    description: "Часть 2. Биологически важные гетероциклические соединения.",
    url: "https://biochemistry74.ru/lectures/09/lect09-2.pdf",
  },
];

const plans = [
  {
    id: "1",
    title: "Занятие № 1",
    description:
      "Способы выражения концентрации растворов. Титриметрический метод анализа (лабораторная работа).",
  },
  { id: "2", title: "Занятие № 2", description: "Химическая термодинамика." },
  {
    id: "3",
    title: "Занятие № 3",
    description: "Химическая кинетика. Химическое равновесие.",
  },
  {
    id: "4",
    title: "Занятие № 4",
    description: "Коллигативные свойства растворов.",
  },
  {
    id: "5",
    title: "Занятие № 5",
    description:
      "Теория растворов электролитов. Протолитические равновесия и процессы в растворах электролитов. Электрохимия.",
  },
  {
    id: "6",
    title: "Занятие № 6",
    description:
      "Протолитические равновесия в растворах солей. Протолитические буферные системы.",
  },
  {
    id: "7",
    title: "Занятие № 7",
    description: "Гетерогенные равновесия и процессы.",
  },
  {
    id: "8",
    title: "Занятие № 8",
    description: "Лигандно-обменные равновесия. Биогенные элементы.",
  },
  {
    id: "9",
    title: "Занятие № 9",
    description: "Редокс-равновесия и процессы.",
  },
  {
    id: "10",
    title: "Занятие № 10",
    description: "Физико-химия поверхностных явлений.",
  },
  {
    id: "11",
    title: "Занятие № 11",
    description:
      "Физико-химия дисперсных систем. Свойства растворов высокомолекулярных соединений.",
  },
  {
    id: "12",
    title: "Занятие № 12",
    description:
      "Классификация, строение и номенклатура органических соединений.",
  },
  {
    id: "13",
    title: "Занятие № 13",
    description: "Реакционная способность органических соединений.",
  },
  {
    id: "14",
    title: "Занятие № 14",
    description: "Поли- и гетерофункциональные органические соединения.",
  },
  {
    id: "15",
    title: "Занятие № 15",
    description: "Гетероциклические органические соединения.",
  },
  {
    id: "16",
    title: "Занятие № 16",
    description: `(только для студентов стоматологического факультета)${"\n"} Прикладные аспекты химии в стоматологии.`,
  },
];

const LecturesPage: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#AFC8AF",
        padding: "20px",
        border: "2px solid #ccc",
        maxWidth: "90%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "left",
          fontSize: "18pt",
          fontWeight: "bold",
          marginBottom: "10px",
          fontFamily: "serif",
          width: "100%",
        }}
      >
        Химия
      </Typography>
      <Typography
        variant="h2"
        sx={{
          textAlign: "left",
          fontSize: "18pt",
          fontWeight: "bold",
          marginBottom: "20px",
          fontFamily: "serif",
          width: "100%",
        }}
      >
        Лекции
      </Typography>
      {lectures.map((lecture) => (
        <Box
          key={lecture.id}
          sx={{
            marginBottom: "40px",
            backgroundColor: "#B0E0E6",
            border: "1px solid #000",
            borderRadius: "5px",
            padding: "15px",
            fontFamily: "serif",
            width: "100%",
          }}
        >
          <MuiLink
            href={lecture.url}
            target="_blank"
            sx={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "14pt",
                marginBottom: "5px",
              }}
            >
              {lecture.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "12pt",
                fontWeight: "normal",
                textAlign: "left",
              }}
            >
              {lecture.description}
            </Typography>
          </MuiLink>
        </Box>
      ))}

      <Typography
        variant="h2"
        sx={{
          textAlign: "left",
          fontSize: "18pt",
          fontWeight: "bold",
          margin: "20px 0",
          fontFamily: "serif",
          width: "100%",
        }}
      >
        План занятий
      </Typography>
      {plans.map((plan) => (
        <Box
          key={plan.id}
          sx={{
            marginBottom: "40px",
            backgroundColor: "#B0E0E6",
            border: "1px solid #000",
            borderRadius: "5px",
            padding: "15px",
            fontFamily: "serif",
            width: "100%",
          }}
        >
          <Link
            to={`/lessons/${plan.id}`}
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "14pt",
                marginBottom: "5px",
              }}
            >
              {plan.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "12pt",
                fontWeight: "normal",
              }}
            >
              {plan.description}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default LecturesPage;
