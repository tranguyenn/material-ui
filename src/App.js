import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Router from "./routes";
import { BrowserRouter, useLocation } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
