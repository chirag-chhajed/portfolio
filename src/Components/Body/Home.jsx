import styles from "../../css/home.module.css"
import {Context} from '../../Context'
import { useContext } from "react"

export default function Home(){
    const {theme} = useContext(Context)

    return (
      <section className={`${styles.home} ${styles[theme]}`} id="home">
        <div className="description">
          <h1>
            Hey, This is Chirag A <span>Frontend Developer</span>
          </h1>
          <h2>I craft responsive websites where technologies and creativity</h2>
        </div>
        <div>
          <div>
            <img src="./assets/my.webp" alt="hello" />
          </div>
        </div>
      </section>
    );
}