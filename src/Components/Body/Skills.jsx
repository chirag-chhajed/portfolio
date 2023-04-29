import {nanoid} from "nanoid"
import styles from "../../css/skiils.module.css"

function SkillCard({id,img}){
    return(
        <div key={id} className={styles.skillcard}>
            <img src={img} alt="logo" />
            <div className={styles.imagebg}></div>
        </div>
    )
}

export default function Skills(){
    return(
        <>
            <section className={styles.skills} id="skills">
                <SkillCard 
                    img={"./assets/HTML.png"}
                    id={nanoid()}
                />
                <SkillCard 
                    img={"./assets/CSS.png"}
                    id={nanoid()}
                />
                <SkillCard 
                    img={"./assets/javascript.svg"}
                    id={nanoid()}
                />
                <SkillCard 
                    img={"./assets/react.png"}
                    id={nanoid()}
                />
                <SkillCard 
                    img={"./assets/tailwind.png"}
                    id={nanoid()}
                />
                <SkillCard 
                    img={"./assets/nodejs.png"}
                    id={nanoid()}
                />
                <SkillCard 
                    img={"./assets/postgresql-icon.svg"}
                    id={nanoid()}
                />
                <SkillCard 
                    img={"./assets/mongodb-icon.svg"}
                    id={nanoid()}
                />
                
            </section>
        </>
    )
}