import styles from "../../css/home.module.css"

export default function Home(){
    return(
        <section className={styles.home} id="home">
            <div className="description">
                <h1>Hey, This is Chirag A <span>Frontend Developer</span></h1>
                <h2>I craft responsive websites where technologies and creativity</h2>
            </div>
            <div>
                <img src="./1.png" alt="hello" />
            </div>
            
        </section>
    )
}