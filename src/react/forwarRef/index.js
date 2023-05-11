import { useRef } from "react"
import { forwardRef } from "react"

export default function Home() {
    const input = useRef(null)
    return (
        <div>
            <span>enter your name</span>
            <Input ref={input} />
            <button onClick={() => {
                input.current.focus()
            }}>edit</button>
        </div>
    )
}

const Input = forwardRef((props, ref) => {
    return (
        <>
            <input ref={ref} />
        </>

    )
})