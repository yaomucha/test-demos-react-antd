import { memo } from "react";
import useSetState from "../index";

export default function useSetStateDemo() {
    const [state, setState] = useSetState({ age: 1 })

    return (
        <div>
            <Content age={state.age}/>

            <button onClick={() => {
                setState(pre => ({age: pre.age + 1}))
            }}>add age</button>
        </div>
    )
}

const Content = memo(function Content({ age }) {
    return (
        <>
            <div>age: {age}</div>
        </>
    )
})