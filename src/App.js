import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Customers from "./components/customer";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import NotFound from "./components/not-found";
import Rental from "./components/rental";
import MovieForm from "./components/movieForm";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <div>
            <Routes>
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
