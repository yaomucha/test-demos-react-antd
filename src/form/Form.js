export default function Form(props) {

    const {
        children
    } = props

    return (
        <form name="form1">
            {children}

            <div onClick={()=>{
                const aa = document.form1
                console.log(aa.user1.value)
            }}>submit</div>
        </form>
    )
}