import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Customers from "./components/customer";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import NotFound from "./components/not-found";
import Rental from "./components/rental";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import "./App.css";
import Register from "./components/register";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <div>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/movie/:id" element={<MovieForm />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/rental" element={<Rental />} />
              <Route path="/" element={<Navigate to="/movies" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </>
    );
  }
}

export default App;
