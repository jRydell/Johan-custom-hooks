import { useState } from "react"

export const UseToggle = ()=> {
    const [toggle, setToggle] = useState(false);
    const toggleState = () => setToggle(toggle => !toggle)

    return {toggle, toggleState}
}