import { Route, Routes } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";

export default function AppRoutes() {
  return (
    <main className="w-full min-h-screen flex flex-col p-8">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
}
