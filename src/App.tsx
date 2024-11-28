import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LecturesPage from "./pages/LecturesPage";
import LessonDetails from "./pages/LessonDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lectures" element={<LecturesPage />} />
      <Route path="/lessons/:id" element={<LessonDetails />} />
    </Routes>
  );
}

export default App;
