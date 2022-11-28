import { useContext,useState } from "react";
import { Context } from "../../Context";
import styles from "../../css/themes.module.css"

function DropDown(){
    const {theme,setTheme} = useContext(Context)
    // console.log(theme)
    return(
        <div className={`${styles.dropdown} ${styles[theme]}`}>
            <div onClick={()=>setTheme("purple")}></div>
            <div onClick={()=>setTheme("dark")}></div>
            <div onClick={()=>setTheme("new")}></div>
            <div onClick={()=>setTheme("hello")}></div>
            <div onClick={()=>setTheme("world")}></div>
            
        </div>
    )
}


export default function Themes(){
    
    const [dropdown,setDropdown] = useState(false)
    // document.addEventListener("click",()=>setDropdown(false))
    
    
    return(
        <>
            <i className="ri-brush-2-fill ri-2x" title="themes" onClick={()=>setDropdown(!dropdown)}></i>
        {dropdown && <DropDown/>}
        </>
        
        
        
    )
}