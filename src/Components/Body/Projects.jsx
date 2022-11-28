import data from "../data"
import styles from "../../css/project.module.css"

function ProjectCard({ img, id, github, deployed,name }) {
    return (
        <div key={id} className={styles.projectcard}>
            <div className={styles.projectimage}>
                <img src={img} alt="image" />
            </div>
            <h2>{name}</h2>
            <div>
                <a href={github}>GitHub</a>
                <a href={deployed}>Deployed</a>
            </div>
        </div>
    )
}

export default function Projects() {
    const cards = data.map(card => (
        <ProjectCard
            key={card.id}
            {...card}
        />
    ))
    return (
        <section className={styles.projects} id="projects">
            {cards}
        </section>
    )
}