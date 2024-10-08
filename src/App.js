import React from "react";
import { ThemeProvider } from ".Components/ThemeContext";
import ThemedComponent from ".Components/ThemedComponent";

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}
export default App;
