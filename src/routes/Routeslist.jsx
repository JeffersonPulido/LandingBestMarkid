import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PoliciesPage from "../pages/PoliciesPage";
export default function Routeslist() {
  return (
<>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/policies" element={<PoliciesPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
