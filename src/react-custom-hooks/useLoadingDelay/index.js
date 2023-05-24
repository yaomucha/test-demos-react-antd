import { useEffect } from "react"
import { useState,useRef } from "react"


// TODO: 未完成
export default function useLoadingDelay(api, loadingDelay) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const timerRef = useRef()

    useEffect(() => {
        if(data){
            timerRef.current = setTimeout(() => {
                setLoading(true)
            }, loadingDelay)
        
        
            api()
                .then(res => {
                    if (timerRef.current) {
                        setLoading(false)
                        // setData(res)
                        clearTimeout(timerRef.current)
                    }
                })
        
        }
    }, [data])

    
    

    return [loading, data]
}