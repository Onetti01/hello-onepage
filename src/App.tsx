import { lazy, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//import PrivateRoute from "components/PrivateRoute";
const Statistics = lazy(() => import("./pages/Statistics"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
