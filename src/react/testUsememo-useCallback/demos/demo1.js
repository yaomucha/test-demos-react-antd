import { useCallback, useMemo, useState } from "react";

export default function Demo() {
    const [state, setState] = useState(0)

    const showuseCallback = useCallback(()=>{
        setState(1)
    },[])

    const showuseMemo  = useMemo(()=>{
        return ()=>{
            setState(2)
        }
    },[])

    return (
        <div>
            <div>{state}</div>
            <button onClick={() => { showuseCallback() }}>click</button>
        </div>
    )
}