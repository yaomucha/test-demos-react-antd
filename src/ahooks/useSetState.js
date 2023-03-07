import React, { useCallback, useState } from 'react';
import { useSetState } from 'ahooks';


export default function useSetState1() {
  const [state, setState] = useSetState(0);   //源码里把setState用useCallback封装了，是为了组件传参做优化


  // const show = () => {    //React.memo与useCallback要配合使用
  //   console.log("show")
  // }


  const show = useCallback(() => {
    console.log("show")
  }, [])


  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <Com1 setState={setState} />
        <button type="button" onClick={() => setState({ foo: 'bar' })} style={{ margin: '0 8px' }}>
          set foo
        </button>
        <button type="button" onClick={() => setState((prev) => ({ count: prev.count + 1 }))}>
          count + 1
        </button>
      </p>
    </div>
  );
};

function JUseState(initialState) {
  const [state, setState] = useState(initialState);

  function setValue(newObj) {
    setState(Object.assign({}, state, newObj))
  }


  return [state, setValue]
}

// export default function useSetState2() {




//     const [state, setValue] = JUseState({
//         hello: '',
//         count: 0,
//     });

//     return (
//         <div>
//             <pre>{JSON.stringify(state, null, 2)}</pre>
//             <p>
//                 <button type="button" onClick={() => setValue({ hello: 'world' })}>
//                     set hello
//                 </button>
//                 <button type="button" onClick={() => setValue({ foo: 'bar' })} style={{ margin: '0 8px' }}>
//                     set foo
//                 </button>
//                 {/* <button type="button" onClick={() => setValue((prev) => ({ count: prev.count + 1 }))}> */}
//                 <button type="button" onClick={() => setValue({count: state.count+1})}>
//                     count + 1
//                 </button>
//             </p>
//         </div>
//     );
// };




const Com1 = React.memo(function Com1(props) {
  return <button type="button" onClick={() => props.setState({ hello: 'world' })}>
    set hello
  </button>
})