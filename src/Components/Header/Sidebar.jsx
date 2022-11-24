import styles from "../../css/sidebar.module.css"

export default function Sidebar(){
    return(
        <>
            <nav className={styles.sidebar}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}