import styles from "../../css/sidebar.module.css"

export default function Sidebar({removeTheme}){
    return(
        <>
            <nav className={styles.sidebar}>
                <ul>
                    <li><a onClick={removeTheme} href="#home">Home</a></li>
                    <li><a onClick={removeTheme}  href="#skills">Skills</a></li>
                    <li><a onClick={removeTheme} href="#projects">Projects</a></li>
                    <li><a onClick={removeTheme} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}