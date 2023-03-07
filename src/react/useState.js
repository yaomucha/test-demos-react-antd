import React, { useRef, useState } from 'react'

// export default function UseState() {
//     // 声明一个叫 "count" 的 state 变量
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             {/* 实时更新 */}
//             <p>You clicked {count} times</p> 

//             {/* conso.log 不实时更新 */}
//             <button onClick={() => { setCount(count + 1); console.log(count); }}> 
//                 Click me
//             </button>
//         </div>
//     );
// }

export default function UseState () { 
    let inputEl = useRef(0)
     const handleFocus = ()=>{
        inputEl.current++

        // 实时更新
        console.log('更新后的值', inputEl.current);  
     }
    return (
        <p>  
            {/* 都没有变化，始终为0和false，不会触发页面重新渲染 */}
            {inputEl.current}
            {inputEl.current? <div>true</div>: <div>false</div>}  
            <button onClick={()=>handleFocus()}>单击我</button>
        </p>
    ) 
};

// 区别：
// 1. useState的值在每个rernder中都是独立存在的。而useRef.current则更像是相对于render函数的一个全局变量，每次他会保持render的最新状态。（useState异步更新其值，useRef同步更新。）
// 2. useState触发重新渲染，useRef不触发
// 3. useRef（）钩不仅用于DOM引用。“ ref”对象是通用容器，其当前属性是可变的，并且可以保存任何值，类似于类的实例属性。
// 4. 变量是决定视图图层渲染的变量，请使用useState，其他用途useRef
// 5. useRef特性：可变的ref对象，持久化