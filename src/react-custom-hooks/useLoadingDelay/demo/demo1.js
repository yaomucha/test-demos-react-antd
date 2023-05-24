import useLoadingDelay from "../index"

export default function Demo1(){



    const [loading,data] = useLoadingDelay(() =>{ return fetch("http://127.0.0.1:4523/m1/1050444-0-default/apple/dep/profile/list").then(res => { return res.json() })},500)
    return <div>
        {loading? "loading": data}
    </div>
}