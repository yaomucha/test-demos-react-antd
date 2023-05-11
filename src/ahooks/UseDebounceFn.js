import { useDebounceFn } from 'ahooks';
import React, { useState, useMemo } from 'react';
import { debounce } from 'lodash';

export default function UseDebounceFn1() {
  const [value, setValue] = useState(0);
  // const { run } = useDebounceFn(
  //   () => {
  //     setValue(value + 1);
  //   },
  //   {
  //     wait: 500,
  //   },
  // );


  function run1() {   //不生效
    debounce(() => {setValue(value + 1) }, 500, { wait: 500 })
  }

  const run2 = useMemo(() => {  //生效
    return debounce(() => { setValue(value + 1) }, 500, { wait: 500 })
  }, [])

  let timer = null

  function change(e){
    if(timer){
      clearTimeout(timer)
    }

    timer = setTimeout(()=>{
      setValue(e.target.value)
    },1000)
    
  }

  return (
    <div>
      {/* <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <button type="button" onClick={()=>{run2()}}>
        Click fast!
      </button> */}



      <input onChange={change}></input>
      <div>{value}</div>
    </div>
  )
}