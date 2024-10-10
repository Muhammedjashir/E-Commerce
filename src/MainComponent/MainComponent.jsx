import React from "react";
import Navbar from "./Navbar";
import Login from "../Pages/Singin";
import Register from "../Pages/Singup";
import { Routes, Route } from "react-router-dom";
import Images from "../Pages/Images";
import axios from 'axios'

function MainComponent() {
  return (
    <div>
      <Navbar />
      <div>
<Images/>
      </div>
    </div>
  );
}

export default MainComponent;
