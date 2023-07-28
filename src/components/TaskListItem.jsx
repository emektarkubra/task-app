import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import Badge from "./Badge";
import { StyledTaskListItem } from "./styled";
import { StyledDeleteButton, StyledDoneButton, StyledEditButton } from "./styled/Button.styled";

export default function TaskListItem({ item }) {
    const { handleDeleteTask, handleEditTask } = useContext(SiteContext)

    function handleDoneTask(){
        item.isDone = !item.isDone
        console.log(item)
    }

    return (
        <>
            <StyledTaskListItem> 
                <div>{item.priority ? <Badge /> : null }{item.text}</div>
                <div className="button-group">
                    <StyledDoneButton onClick={handleDoneTask} >Done</StyledDoneButton>
                    <StyledEditButton onClick={()=> handleEditTask(item)}>Edit</StyledEditButton>
                    <StyledDeleteButton onClick={()=> handleDeleteTask(item)}>Delete</StyledDeleteButton>
                </div>
            </StyledTaskListItem>

        </>
    )
}