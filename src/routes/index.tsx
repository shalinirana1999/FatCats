import { Route, Routes } from "react-router";
import Terms from "../pages/terms";
import DataDeletionInstruction from "../pages/dataDeletionInstruction";
import PrivacyPolicy from "../pages/privacyPolicy";
import Home from "../pages";

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route
        path="/data-deletion-instruction"
        element={<DataDeletionInstruction />}
      />
    </Routes>
  );
};

export default SiteRoutes;
