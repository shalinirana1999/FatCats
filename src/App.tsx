import { BrowserRouter } from "react-router-dom";
import SiteRoutes from "./routes/index.tsx";
import "./style/main.scss";

const App = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <SiteRoutes />
    </BrowserRouter>
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
