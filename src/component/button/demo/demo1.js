import { useRef } from "react";
import Button from "../index";

export default function Demo1() {
    const buttonRef = useRef(null)

    const handle = (e) => {
        console.log(buttonRef.current)
    }
    return <Button ref={buttonRef} onClick={handle}>ajiao1</Button>
}