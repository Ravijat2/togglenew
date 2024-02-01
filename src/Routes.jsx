import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const CardLayoutForm = React.lazy(() => import("pages/CardLayoutForm"));
const ListLayoutForm = React.lazy(() => import("pages/ListLayoutForm"));
const CardPopOut = React.lazy(() => import("pages/CardPopOut"));
const ListPopOut = React.lazy(() => import("pages/ListPopOut"));
const CardLayout = React.lazy(() => import("pages/CardLayout"));
const ListLayout = React.lazy(() => import("pages/ListLayout"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/listlayout" element={<ListLayout />} />
          <Route path="/cardlayout" element={<CardLayout />} />
          <Route path="/listpopout" element={<ListPopOut />} />
          <Route path="/cardpopout" element={<CardPopOut />} />
          <Route path="/listlayoutform" element={<ListLayoutForm />} />
          <Route path="/cardlayoutform" element={<CardLayoutForm />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
