import React, { createContext, useState } from "react";

// Creamos el control del color

export const ThemeContext = createContext();

//Hacemos una estacion que pueda cambiar el color y decir a todos si es claro o oscuro

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("claro"); // Empezamos con la habitacion clara

  //esta funcion cambia el color de claro a oscuro y de oscuro a claro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "claro" ? "oscuro" : "claro"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
