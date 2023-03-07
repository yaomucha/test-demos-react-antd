// memo

import React from 'react';

import Boxes from './Boxes';

function App() {
  const [name, setName] = React.useState('');
  const [boxWidth, setBoxWidth] = React.useState(1);
  
  const id = React.useId();
  
  // Try changing some of these values!
  const boxes = [
    { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
    { flex: 3, background: 'hsl(260deg 100% 40%)' },
    { flex: 1, background: 'hsl(50deg 100% 60%)' },
  ]; //会重新渲染Boxes.js

  // const boxes = React.useMemo(() => {
  // // 有一个return
  //   return [
  //     { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
  //     { flex: 3, background: 'hsl(260deg 100% 40%)' },
  //     { flex: 1, background: 'hsl(50deg 100% 60%)' },
  //   ];
  // }, [boxWidth]);   //不会重新渲染Boxes.js
  
  return (
    <>
      <Boxes boxes={boxes} />
      
      <section>
        <label htmlFor={`${id}-name`}>
          Name:
        </label>
        <input
          id={`${id}-name`}
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor={`${id}-box-width`}>
          First box width:
        </label>
        <input
          id={`${id}-box-width`}
          type="range"
          min={1}
          max={5}
          step={0.01}
          value={boxWidth}
          onChange={(event) => {
            setBoxWidth(Number(event.target.value));
          }}
        />
      </section>
    </>
  );
}

export default App;




// callback 

// import React from 'react';

// import MegaBoost from './MegaBoost';

// function App() {
//   const [count, setCount] = React.useState(0);

//   // function handleMegaBoost() {
//   //   setCount((currentValue) => currentValue + 1234);
//   // }

//   // 那么解决办法：
//   // 1. 使用useMemo把函数（数组，对象）也变成纯函数（数组，对象）
//   // const handleMegaBoost = React.useMemo(() => {
//       // 有一个return
//   //   return function() {
//   //     setCount((currentValue) => currentValue + 1234);
//   //   }
//   // }, []);


//   // 2. 使用进一步优雅的useCallback
//   // useCallback的用途与useMemo相同，但它是专门为函数构建的。 
//   const handleMegaBoost = React.useCallback(() => {
//     setCount((currentValue) => currentValue + 1234);
//   }, []);

//   return (
//     <>
//       Count: {count}
//       <button
//         onClick={() => {
//           setCount(count + 1)
//         }}
//       >
//         Click me!
//       </button>

//       {/* 1. 即使MegaBoost用memo变成了一个纯组件了，但是它还是会更新，因为传入它的props是一个函数（数组，对象），无论如何在react看来，这都是不相等的。详情见isFunctionEqual.js */}
//       <MegaBoost handleClick={handleMegaBoost} />  

//     </>
//   );
// }

// export default App;


// This:
// React.useCallback(function helloWorld(){}, []);


// ...Is functionally equivalent to this:
// React.useMemo(() => function helloWorld(){}, []);