import { memo } from "react";
import useSetState from "../index";

export default function useSetStateDemo() {
    const [state, setState] = useSetState({ name: 'ajiao' })

    return (
        <div>
            <Content name={state.name}  age={state.age}/>

            <button onClick={() => {
                setState({
                    age: "18"
                })
            }}>add age</button>
        </div>
    )
}

const Content = memo(function Content({ name, age }) {
    return (
        <>
            <div>name: {name}</div>
            <div>age: {age}</div>
        </>
    )
})