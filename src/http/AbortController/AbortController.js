import { useRef } from "react"

export default function AbortControllerDemo() {
    const controllers = new AbortController()


    function request() {
        fetch('http://127.0.0.1:4523/mock/1050444/apple/dep/profile/list', { signal:controllers.signal })
            .then(res => {
                // return res.json()
            })
            .then(res => {
                // console.log(res)
            })
    }

    function cancel() {
        if (controllers) {
            console.log(controllers)
            controllers.abort()
            console.log("已终止")
        }
    }


    // 按钮控制取消
    return <ButtonCancel cancel={cancel} request={request} />

}

export function ButtonCancel({ request, cancel }) {

    return (
        <>
            <button onClick={() => request()}>request</button>
            <button onClick={() => cancel()}>cancel</button>
        </>
    )
}
