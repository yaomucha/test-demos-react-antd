import useLoadingDelay from "../index"

export default function Demo1() {

    const [loading, data] = useLoadingDelay(() => { return fetch("http://127.0.0.1:4523/mock/1050444/apple/dep/profile/list").then(res => { return res.json() }) },500)
    return <div>
        {loading ? "loading" : JSON.stringify(data)}
    </div>
}