import { Routes, Route } from "react-router-dom";
import LecturesPage from "./pages/LecturesPage";
import LessonDetails from "./pages/LessonDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LecturesPage />} />
      <Route path="/lessons/:id" element={<LessonDetails />} />
    </Routes>
  );
}

export default App;
