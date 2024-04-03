import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LazyHome from "../../Pages/Home/Home";
import LazySubCharacter from "../../Pages/subCharacter/subCharacter";
import LazyLocation from "../../Pages/Location/Location";
import LazyResidence from "../../Pages/Residence/Residence";
const SiteRouter = () => {
  return (
    <AnimatePresence>
      {/* All routes are specified in this file */}
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route path="/subcharacter/:id" element={<LazySubCharacter />} />
        <Route path="/location/:id" element={<LazyLocation />} />
        <Route path="/resedence/:id" element={<LazyResidence />} />
      </Routes>
    </AnimatePresence>
  );
};
export default SiteRouter;
