import Form from "./Form";
import Input from "./Input";
import FormItem from "./FormItem"

export default function FormCus() {

    return (
        <Form onSubmit={() => {

        }}>
            <FormItem
                label="ajiao"
                name="user1"
            >
                <Input />
            </FormItem>
            <FormItem
                label="ajiao"
                name="user2"
            >
                <Input />
            </FormItem>
            <FormItem
                label="ajiao"
                name="user3"
            >
                <Input />
            </FormItem>
        </Form>
    )
}