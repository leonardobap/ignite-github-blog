import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Default } from "./layouts/Default";
import { AboutIssue } from "./pages/AboutIssue";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-issue" element={<AboutIssue />} />
      </Route>
    </Routes>
  );
}
