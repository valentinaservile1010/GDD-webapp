import React, { ReactElement } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import {LogIn, RequireAuth} from "./Auth";

export const App = (): ReactElement =>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

export const AppWithRouter = (): ReactElement =>
    <div className="App">
      <Router>
        <App />
      </Router>
    </div>

const NotFound = (): ReactElement =>
  <div>
    <h3>
      Nothing to see here
    </h3>
  </div>