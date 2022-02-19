import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react'
import LoginUser from '../ui/LoginUser';
import RegisterUser from "../ui/RegisterUser";

const AppRouters = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginUser/>}/>
        <Route path="/register" element={<RegisterUser />}/>
      </Routes>
    </Router>
    </>
  )
};

export default AppRouters;