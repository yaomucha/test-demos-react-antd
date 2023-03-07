import React, { useState } from 'react';
import { useSetState } from 'ahooks';

// interface State {
//   hello: string;
//   count: number;
//   [key: string]: any;
// }

export default function useSetState1() {
  const [state, setState] = useSetState(0);

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <button type="button" onClick={() => setState({ hello: 'world' })}>
          set hello
        </button>
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