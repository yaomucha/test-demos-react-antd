import { useCallback, useState } from 'react';

const useUpdate = () => {
    const [, setState] = useState({});

    return useCallback(() => setState({}), []);
};


export default function TestCallBack() {


    // const [a,setA] = useState(0)

    // const memoizedCallback = useCallback(
    //     () => {
    //         console.log(a);
    //         // setA(20)
    //     },
    //     [],
    // );

    // memoizedCallback()




    const aa = new Test(useUpdate())
   


    return (
        <div onClick={() => {
            aa.run()
        }}><Temp a={aa.state.a} /></div>
    )
}

function Temp(props) {
    return (<div>{props.a}</div>)
}

class Test {
    state = {
        a: 1
    }
    constructor(useUpdate) {
        this.useUpdate = useUpdate
    }

    run() {
        this.state = {
            a: 2
        }
        this.useUpdate()
    }
}


