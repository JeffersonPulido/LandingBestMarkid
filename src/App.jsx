import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewProducts from "./pages/ViewProducts";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/viewproducts" element={<ViewProducts/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;




