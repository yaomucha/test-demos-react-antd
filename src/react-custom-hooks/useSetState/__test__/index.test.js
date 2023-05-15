import useSetState from "../index.js"
import { act, renderHook } from '@testing-library/react';

describe("custom hooks useSetState", () => {
    const setUp = (initialValue) => {
        return renderHook(() => {
            const [state, setState] = useSetState(initialValue);
            return {
                state,
                setState,
            }
        });
    }



    it("初始化", () => {
        const hook = setUp({ age: 1 })

        expect(hook.result.current.state).toEqual({ age: 1 })
    })

    it("直接赋值", () => {
        const hook = setUp({ age: 1 })

        act(() => { hook.result.current.setState({ name: "ajiao" }) })

        expect(hook.result.current.state).toEqual({ age: 1, name: "ajiao" })
    })

    it("传入函数", () => {
        const hook = setUp({ age: 1 })

        act(() => { hook.result.current.setState((pre) => { return {age: pre.age + 1} }) })

        expect(hook.result.current.state).toEqual({ age: 2 })
    })
})