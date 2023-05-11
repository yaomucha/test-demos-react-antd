import { Row } from "@clayui/layout";
import FormItemLable from "./FormItemLable"
import FormItemInput from "./FormItemInput"

export default function FormItem(props) {

    const {
        label,
        children,
        name
    } = props
    
    return (
        <Row>
            <FormItemLable>{label}</FormItemLable>
            <FormItemInput name={name}>{children}</FormItemInput>
        </Row>
    )

}