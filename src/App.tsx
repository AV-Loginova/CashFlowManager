import React from "react";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddCategory from "./components/AddCategory/AddCategory";
import AddExpense from "./components/AddExpense/AddExpense";

function App() {
  return (
    <div className="h-[100vh] overflow-x-hidden flex flex-col justify-between gap-5 text-[#222222]">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/addexpense" element={<AddExpense />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
