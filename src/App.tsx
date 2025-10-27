import Header from "./components/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <>
      <Header />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
