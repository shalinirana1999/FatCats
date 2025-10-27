import Header from "./components/header";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

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
