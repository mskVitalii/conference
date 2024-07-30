import { BrowserRouter, Route, Routes } from "react-router-dom";

import CategoryPage from "./pages/Category";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:project" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
