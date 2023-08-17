import { useEffect, useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const SiteContext = createContext();

function SiteContextProvider({ children }) {
  const defaultTask = {
    text: "",
    priority: false,
    isEdited: false,
    isDone: false,
  };

  const [task, setTask] = useState(defaultTask);
  const [taskList, setTaskList] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [filteredTaskList, setFilteredTaskList] = useState(taskList);
  const [taskCount, setTaskCount] = useState(0);

  // local storage
  useEffect(() => {
    const storedTaskList = JSON.parse(localStorage.getItem("taskList"));
    setTaskList(storedTaskList ?? []);
  }, []);

  useEffect(() => {
    if (taskCount > 0) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }, [taskCount]);

  // setting task to form change
  function handleChangeInput(e) {
    setTask((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  }

  // submit task
  function handleSubmitTask(e) {
    e.preventDefault();
    if (task.isEdited) {
      const index = taskList.findIndex((taskItem) => taskItem.id === task.id);
      setTask({ ...taskList[index], isEdited: false });
      taskList.splice(index, 1, task);
      setTaskList(taskList);
    } else if (task.text.length > 3) {
      setTaskList((prev) => [...prev, task]);
      task.id = uuidv4();
    }

    setTaskCount((prev) => prev + 1);
    e.target.reset();
    setTask(defaultTask);
  }

  // delete task
  function handleDeleteTask(item) {
    setTaskList(taskList.filter((task) => task.id !== item.id));
    setTaskCount((prev) => prev + 1);
  }

  // edit task
  function handleEditTask(item) {
    const editedTask = taskList.find((taskItem) => taskItem.id === item.id);
    setTask({ ...editedTask, isEdited: true });
    setTaskCount((prev) => prev + 1);
  }

  // filter task
  function handleShowPrimaryTasks(e) {
    setVisibility((prev) => !prev);
  }

  useEffect(() => {
    visibility
      ? setFilteredTaskList(taskList.filter((taskItem) => taskItem.priority))
      : setFilteredTaskList(taskList);
  }, [visibility]);

  useEffect(() => {
    setFilteredTaskList(taskList);
  }, [taskList]);

  // delete all tasks
  function handleDeleteAllTasks(e) {
    setTaskList([]);
    setTaskCount((prev) => prev + 1);
  }

  //  done task
  function handleDoneTask(item) {
    setTaskList(
      taskList.map((taskItem) => {
        if (taskItem.id === item.id) {
          return { ...taskItem, isDone: !taskItem.isDone };
        }
        return taskItem;
      })
    );
  }

  return (
    <>
      <SiteContext.Provider
        value={{
          handleChangeInput,
          handleSubmitTask,
          handleDeleteTask,
          handleEditTask,
          handleShowPrimaryTasks,
          handleDeleteAllTasks,
          handleDoneTask,
          filteredTaskList,
          task,
          visibility,
        }}>
        {children}
      </SiteContext.Provider>
    </>
  );
}

export { SiteContext, SiteContextProvider };
