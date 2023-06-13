export default function AutoCancel() {

    let controllers = new AbortController()

    function request() {
        if(controllers){
            controllers.abort()
            controllers = new AbortController()
        }
        
        fetch('http://127.0.0.1:4523/mock/1050444/apple/dep/profile/list', { signal: controllers.signal })
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log(res)
            })
    }




    // 自动取消前面请求
    return <AutoCancelCom request={request} />
}

export function AutoCancelCom({ request }) {

    return (
        <>
            <button onClick={() => request()}>request</button>
        </>
    )
}