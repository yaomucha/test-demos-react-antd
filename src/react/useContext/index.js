import { useContext } from "react"
import { createContext } from "react"
import "./index.css"
import { useState } from "react"

const HomeContext = createContext("dark")

const Home = () => {

    const [theme, setTheme] = useState("light")
    return (
        <HomeContext.Provider value={{ theme, setTheme }}>
            <Content />
        </HomeContext.Provider>
    )
}

const Content = () => {
    const { theme, setTheme } = useContext(HomeContext)
    return (
        <div className={theme}>
            <h1>title</h1>
            <button onClick={() => {
                setTheme("light")
            }}>light</button>
            <button onClick={() => {
                setTheme("dark")
            }}>dark</button>
        </div>
    )
}

export default Home