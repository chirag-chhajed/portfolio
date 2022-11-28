import styles from "../../css/navbar.module.css"
import Themes from "./Themes"

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            {/* <Themes/> */}
        </nav>
        )
}