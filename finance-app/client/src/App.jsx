import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
function App() {
  return (
    <BrowserRouter>
      <p>Hao</p>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
