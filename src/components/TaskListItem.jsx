import Badge from "./Badge";
import { StyledTaskListItem } from "./styled";
import { StyledDeleteButton, StyledDoneButton, StyledEditButton } from "./styled/Button.styled";

export default function TaskListItem({ task }) {
    return (
        <>
            <StyledTaskListItem>
                <div> <Badge /> {task.text}</div>
                <div className="button-group">
                    <StyledDoneButton >Done</StyledDoneButton>
                    <StyledEditButton>Edit</StyledEditButton>
                    <StyledDeleteButton>Delete</StyledDeleteButton>
                </div>
            </StyledTaskListItem>

        </>
    )
}