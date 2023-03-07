import { useCallback, useState, memo } from 'react';

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

    // memoizedCallback()  //可自行决定它在哪调用




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





// 使用useCallback可以由用户决定它的调用时机，而使用useEffect则不能


// 场景一：
// 1. 在一个组件中写入一个实时显示当前时间的控件和一个输入值改变一些东西的控件
// 2. 时间控件的值随时在变，输入框控件的值只有在输入的值改变时才改变
// 3. 因为在同一个组件，时间控件会影响输入框控件导致两个都会重新渲染，造成性能浪费
// 4. 引入了useMemo hooks，设置时间控件在输入值改变才更新
// 5. 但这并不是最好的方式
// 6. 把时间控件和输入框控件拆分成两个组件，各自管理各自的state，互不影响，也就不会影响更新
// 7. 但是一些场景中，state并非在使用的组件中，而是由上层传入进去的，这时，第六点方法不能使用
// 8. 引入React.memo,来解决第七点问题。用memo把输入框控件包裹起来，只有在接收到新的state，或者内部的state改变时才重新渲染。这就是所谓的纯组件。本质上，我们告诉React这个组件在相同的输入下总是会产生相同的输出，我们可以跳过没有任何改变的重新渲染。
// 9. 


