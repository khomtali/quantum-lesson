import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { GlossaryPage } from "./pages/GlossaryPage";
import { HomePage } from "./pages/HomePage";
import { LessonOnePage } from "./pages/LessonOnePage";
import { LessonTwoPage } from "./pages/LessonTwoPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { QuestionsPage } from "./pages/QuestionsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/lesson/1" element={<LessonOnePage />} />
        <Route path="/lesson/2" element={<LessonTwoPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
