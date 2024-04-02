import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LazyHome from "../../Pages/Home/Home";
import LazySubCharacter from "../../Pages/subCharacter/subCharacter";
const SiteRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route path="/subcharacter" element={<LazySubCharacter />} />
      </Routes>
    </AnimatePresence>
  );
};
export default SiteRouter;
