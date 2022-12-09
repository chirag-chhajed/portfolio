import data from "../data"
import styles from "../../css/project.module.css"
import {Context} from '../../Context'
import { useContext } from "react"

function ProjectCard({ img, id, github, deployed,name }) {
   

    return (
        <div key={id} className={styles.projectcard}>
            <div className={styles.projectimage}>
                <img src={img} alt="image" />
            </div>
            <h2>{name}</h2>
            <div>
                <a href={github} target="_blank">GitHub</a>
                <a href={deployed} target="_blank">Deployed</a>
            </div>
        </div>
    )
}

export default function Projects() {
    const {theme} = useContext(Context)
    const cards = data.map(card => (
        <ProjectCard
            key={card.id}
            {...card}
        />
    ))
    return (
        <section className={`${styles.projects} ${styles[theme]}`} id="projects">
            {cards}
        </section>
    )
}