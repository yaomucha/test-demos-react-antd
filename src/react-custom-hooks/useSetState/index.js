import { isFunction } from "lodash"
import { useCallback, useState } from "react"

export default function useSetState(initState) {

    const [state, setState] = useState(initState)

    const setMergeState = useCallback((newState) => {
        setState((preState) => {
            const newRes = isFunction(newState) ? newState(preState) : newState
            return { ...preState, ...newRes }
        })
    }, [])

    return [state, setMergeState]
}