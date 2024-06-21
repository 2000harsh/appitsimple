import F1 from "./multisteperForm/F1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import F2 from "./multisteperForm/F2";
import F3 from "./multisteperForm/F3";
import Final from "./multisteperForm/Final";
import { useState } from "react";
// import "./App.css";
import { FormProvider } from "./context/FormContext";
function App() {
  const [submittedData, setSubmittedData] = useState([]);

  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<F1 />} />
          <Route path="/f2" element={<F2 />} />
          <Route path="/f3" element={<F3 />} />
          <Route path="/submit" element={<Final />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
