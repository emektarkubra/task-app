import { useState } from "react";
import { createContext } from "react";
import {v4 as uuidv4} from 'uuid';

const SiteContext = createContext();

function SiteContextProvider({ children }) {
  const defaultTask = {
    text: "",
    priority: false,
    isEdited : false,
    isDone : false,
  };

  const [task, setTask] = useState(defaultTask);
  const [taskList, setTaskList] = useState([]);

  function handleChangeInput(e) {
    setTask((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  }

  function handleSubmitTask(e) {
      e.preventDefault();
      if(task.isEdited) {
        
        const index = taskList.findIndex(taskItem => taskItem.id === task.id)
        setTask({...taskList[index], isEdited :false})
        taskList.splice(index, 1, task)
        setTaskList(taskList)

      } else if (task.text.length > 3) {
      setTaskList((prev) => [...prev, task]);
      task.id = uuidv4();
    }
    e.target.reset();
    setTask(defaultTask);
  }

  function handleDeleteTask(item){
    setTaskList(taskList.filter(task => task.id !== item.id))
  }

  function handleEditTask(item){
    const editedTask = taskList.find(taskItem => taskItem.id === item.id )
    setTask({...editedTask, isEdited : true});
  }

 

  return (
    <>
      <SiteContext.Provider
        value={{ handleChangeInput, handleSubmitTask, handleDeleteTask, handleEditTask, taskList, task }}>
        {children}
      </SiteContext.Provider>
    </>
  );
}

export { SiteContext, SiteContextProvider };
