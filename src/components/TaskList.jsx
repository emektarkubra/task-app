import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import { StyledTaskList } from "./styled";
import { StyledShowButton } from "./styled/Button.styled";
import TaskListItem from "./TaskListItem";

export default function TaskList() {
    const { taskList } = useContext(SiteContext);
    return (
        <StyledTaskList>
            <StyledShowButton>Show important tasks..</StyledShowButton>

            <ul>
                {taskList.map((task, index) => (
                    <TaskListItem key={index} task={task} />
                ))}
            </ul>
        </StyledTaskList>
    );
}
