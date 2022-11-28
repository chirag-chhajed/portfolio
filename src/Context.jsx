import { createContext,useState,useEffect,useLayoutEffect } from "react";

const Context = createContext()

function ContextProvider({children}){
    const [theme,setTheme] = useState("dark")

    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])
    useLayoutEffect(()=>{
        const style = localStorage.getItem("theme");
        if(style===null){
            setTheme("dark")
        } else{
            setTheme(style)
        }
        
    },[])

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