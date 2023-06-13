import { useEffect } from "react"
import { useState, useRef } from "react"


// 参考文档：https://www.telerik.com/blogs/how-to-create-custom-debounce-hook-react
export default function useLoadingDelay(api, delayTime) {

    const [data, setData] = useState()

    useEffect(() => {
        
            api()
                .then(res => {
                    setData(res)
                    setLoading(false)
                    clearTimeout(timer)
                })


        let timer = setTimeout(() => {
            setLoading(true)
        }, delayTime)

    }, [])

    // 接口在delay时间内没返回，就显示loading，不然就不显示
    const [loading, setLoading] = useState(false)



    return [loading, data]
}