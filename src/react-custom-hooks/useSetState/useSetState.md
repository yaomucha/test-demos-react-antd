#### 注意点：
1. 此自定义hook只针对`object`类型的state
   
2. react的useState的`set`可以直接传递下一个状态，也可以传入一个从前一个状态计算它的函数
   
   https://react.jscn.org/reference/react/useState#setstate

    ```javascript
    const [num, setNum] = useState(1)

    function handleClick () {
        setNum(3) //直接传递下一个状态

        setNum(pre => pre + 1) //可以获取前一个状态
    }
    ```

3. 自定义hook，建议返回的任何函数都包含在`useCallback`中，确保使用者可以优化代码
   https://react.jscn.org/reference/react/useCallback#optimizing-a-custom-hook