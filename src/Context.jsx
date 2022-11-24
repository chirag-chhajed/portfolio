import { createContext,useState,useEffect } from "react";

const Context = createContext()

function ContextProvider({children}){
    const [theme,setTheme] = useState("simple")

    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function watchWidth(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize",watchWidth)
        return function(){
            window.removeEventListener("resize",watchWidth)
        }
    })

    return(
        <Context.Provider value={{theme,setTheme,windowWidth}}>
            {children}
        </Context.Provider>
    )
}

export {Context,ContextProvider}