import React from "react";
// import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";
import Landing from "./Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // Bem
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/Trade"
            element={
              !user ? (
                <Login />
              ) : (
                <>
                  <Header />

                  <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                  </div>
                </>
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
