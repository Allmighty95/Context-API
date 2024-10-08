import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Leemos el color de la estacion de control

  const styles = {
    background: theme === "claro" ? "#333" : "#fff", // si es claro, se pone en blanco; si es oscuro, se pone gris
    color: theme === "claro" ? "#fff" : "#000", // texto negro en claro y blanco en oscuro
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <p>El tema actual es {theme}</p>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </div>
  );
};
export default ThemedComponent;
