import { useSelector } from "react-redux";
import Switcher from "./Switcher";

function Container() {
    const value = useSelector((state) => state.value);
    const style = { 
        "background-color": value ? "darkgrey" : "white",
        height: "100vh"
    };
    return (
        <div style={style}>
            <Switcher />
        </div>
    );
}

export default Container;