import { StyledHeading } from "./styled";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Heading() {
  const { handleTheme, themeName } = useContext(ThemeContext);

  return (
    <>
      <StyledHeading>
        <button onClick={handleTheme}>
          {themeName === "light" ? <BsMoonStarsFill /> : <BsFillSunFill />}
        </button>
        <h1>Task-App</h1>
      </StyledHeading>
    </>
  );
}
