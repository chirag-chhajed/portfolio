import styles from "../../css/header.module.css"
import { useState,useContext } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Themes from "./Themes";
import {Context} from '../../Context'

export default function Header(){
    const {windowWidth,theme} = useContext(Context)
    const [sidebar, setsidebar] = useState(false);
    console.log(styles)
    const hamburgerIcon = sidebar ? <i onClick={()=>setsidebar(false)} className="ri-close-line ri-2x"></i> : <i onClick={()=> setsidebar(true)} className="ri-menu-line ri-2x"></i>

    return(
        <>
        <header className={`${styles.header} ${styles[theme]}`}>
            <h2>C</h2>
            <div>
                <div>
                {windowWidth <600 && hamburgerIcon}
                {windowWidth >=600 && <Navbar/>}
                <Themes/>
                {/* <Navbar/> */}
                </div>
            </div>          
        </header>
        {sidebar && <Sidebar/>}
        </>
    )
}