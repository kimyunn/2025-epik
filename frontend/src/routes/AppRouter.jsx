import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"; // Login 컴포넌트 import

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
