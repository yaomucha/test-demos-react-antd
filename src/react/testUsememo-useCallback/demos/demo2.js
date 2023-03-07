import React, { useCallback, useMemo, useState } from "react";

export default function Demo() {

    const [state1, setState1] = useState(2)


    const [state2, setState2] = useState(0)

    const changeState2 = useCallback(() => {
        setState2(2)
    }, [])


    // function click1(){
    //     console.log(123)
    // }

    // const boxes = [
    //     { a: state1 }
    //   ]; 

    const boxes = useMemo(() => {
        return [
            { a: state1 }
        ];
    }, state1)

    return (
        <div>
            <Show state={boxes} />

            <button onClick={() => { changeState2() }}>click</button>
        </div>
    )
}

const Show = React.memo(function Show(props) {
    return (
        <div onClick={() => { props.click1() }}>123</div>
    )
})