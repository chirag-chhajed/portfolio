import styles from "../../css/contacts.module.css"
import {Context} from '../../Context'
import { useContext } from "react"

export default function Contact(){
    const {theme} = useContext(Context)
    return(
        <section className={`${styles.contact} ${styles[theme]}`} id="contact">
            <a href="https://github.com/chirag-chhajed">
                <i className="ri-github-fill"></i>
            </a>
            <a href="https://twitter.com/ChiragChhajed18">
                <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=+chhajedchirag18@gmail.com">
                <i className="ri-mail-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/chirag-chhajed-6003721a5/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bn6bklVPpQ7WII7w5Bp74pA%3D%3D">
                <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="https://medium.com/@chiragchhajed">
                <i className="ri-medium-fill"></i>
            </a>
            
            
            
        </section>
    )
}