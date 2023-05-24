import Form from "../Form";
import Input from "../Input";
import FormItem from "../FormItem"

export default function FormCus() {

    return (
        <Form onSubmit={() => {

        }}>
            <FormItem
                label="ajiao1"
                name="user1"
            >
                <Input />
            </FormItem>
            <FormItem
                label="ajiao2"
                name="user2"
            >
                <Input />
            </FormItem>
            <FormItem
                label="ajiao3"
                name="user3"
            >
                <Input />
            </FormItem>
        </Form>
    )
}