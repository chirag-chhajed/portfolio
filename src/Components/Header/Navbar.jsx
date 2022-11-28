import styles from "../../css/navbar.module.css"
import {Context} from "../../Context"
import { useContext } from "react"

export default function Navbar(){
    const {theme} = useContext(Context)

    return(
        <nav className={`${styles.navbar} ${styles[theme]}`}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Connect</a></li>
            </ul>
        </nav>
        )
}