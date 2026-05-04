import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CaseStudiesIndex from "./routes/CaseStudiesIndex";
import CaseStudyDetail from "./routes/CaseStudyDetail";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/case-studies" replace />} />
        <Route path="/case-studies" element={<CaseStudiesIndex />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="*" element={<Navigate to="/case-studies" replace />} />
      </Route>
    </Routes>
  );
}
