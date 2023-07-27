import { useState } from "react";
import { createContext } from "react";

const SiteContext = createContext();

function SiteContextProvider({ children }) {
  const defaultTask = {
    text: "",
    priority: false,
  };

  const [task, setTask] = useState(defaultTask);
  const [taskList, setTaskList] = useState([]);

  function handleChangeInput(e) {
    setTask((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  }

  function handleSubmitTask(e) {
    if (task.text.length > 3) {
      setTaskList((prev) => [...prev, task]);
    }
    e.target.reset();
    setTask(defaultTask);
    e.preventDefault();
  }

  return (
    <>
      <SiteContext.Provider
        value={{ handleChangeInput, handleSubmitTask, taskList }}>
        {children}
      </SiteContext.Provider>
    </>
  );
}

export { SiteContext, SiteContextProvider };
