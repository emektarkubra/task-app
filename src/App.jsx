import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Heading from "./components/Heading";
import { StyledContainer } from "./components/styled";
import { GlobalStyle } from "./components/styled";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ThemeContext } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./theme/theme";

function App() {
  const { themeName } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={themeName === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <StyledContainer>
          <Heading />
          <TaskForm />
          <TaskList />
        </StyledContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
