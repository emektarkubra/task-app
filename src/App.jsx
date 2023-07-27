import Heading from "./components/Heading";
import { StyledContainer } from "./components/styled";
import { GlobalStyle } from "./components/styled";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <Heading />
        <TaskForm />
        <TaskList />
      </StyledContainer>
    </>
  );
}

export default App;
