import isFunction from "../index";

describe('isFunction', () => {
    it("array is should be false", () => {
        expect(isFunction([1,2])).toBe(false)
    })
})