import { useState } from "react"

export default function TestUniqueKey(){
    const [list,setList] = useState([ 'apple',
    'banana',
    'carrot'])


    const add = () =>{
        const newArr = [...list,"ajiao add"]

        setList(newArr)
    }

    const Item = ({string}) => {
        return <span>{string}</span>
    }
    return (<div>
        {list.map((item,index) => {
            return <Item string={item} key={item}/>
        })}

        <button onClick={()=>{add()}}>add</button>
    </div>)
}