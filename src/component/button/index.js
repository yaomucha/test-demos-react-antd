import { createRef, forwardRef } from "react"

const Button = forwardRef(function Button(props, ref) {
    const { children, onClick, disabled } = props

    const buttonRef = ref || createRef(null)   //不使用useRef是因为useRef不能进行条件判断，会报错

    const handleClick = (e) => {
        if(disabled){
            e.preventDefault();
            return
        }
        onClick?.(e)
    }


    return <button onClick={handleClick} ref={buttonRef}>{children}</button>
})



export default Button