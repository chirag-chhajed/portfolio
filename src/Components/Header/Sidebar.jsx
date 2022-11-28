import styles from "../../css/sidebar.module.css"
import {Context} from '../../Context'
import { useContext } from "react"

export default function Sidebar({removeTheme}){
    const {theme} = useContext(Context)
    
    return(
        <>
            <nav className={`${styles.sidebar} ${styles[theme]}`}>
                <ul>
                    <li><a onClick={removeTheme} href="#home">Home</a></li>
                    <li><a onClick={removeTheme}  href="#skills">Skills</a></li>
                    <li><a onClick={removeTheme} href="#projects">Projects</a></li>
                    <li><a onClick={removeTheme} href="#contact">Connect</a></li>
                </ul>
            </nav>
        </>
    )
}