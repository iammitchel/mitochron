import "./App.css";
import { BudgetRoom } from "./pages/BudgetRoom";
import { Dashboard } from "./pages/Dashboard";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <ToastContainer position="top-center" autoClose={3000} />
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/budget-room" element={<BudgetRoom />} />
      </Routes>
    </Router>
  );
};

export default App;
