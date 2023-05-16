import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import Button from "../index"

describe("test component button", () => {
    
    // children的显示
    it("children show", () => {
        render(<Button>Follow</Button>)
        expect(screen.getByRole('button')).toHaveTextContent('Follow')
    })

    // disable时onclick事件不会触发
    

    // 父组件能获取button
    
})