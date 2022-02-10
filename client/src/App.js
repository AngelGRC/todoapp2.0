import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "./components/Themes/Themes";
import { ImContrast } from "react-icons/im";
import Navbar from "./components/Navbar/Navbar";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  //themes
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Router>
        <Navbar />

        <Route path="/" component={CreateTodo} />
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" component={CreateTodo} />

        <ImContrast
          className="btnFlotante"
          onClick={() => themeToggler()}
        ></ImContrast>
      </Router>
    </ThemeProvider>
  );
}

export default App;
