import styles from "./SkillsStyles.module.css"
import checkMarkIcon from "../../assets/checkmark-light.svg"
import SkillList from "../../reuse/SkillList";

const Skills = () => {
    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList
                    src={checkMarkIcon}
                    skill="HTML"
                />
                <SkillList
                    src={checkMarkIcon}
                    skill="CSS"
                />
                <SkillList
                    src={checkMarkIcon}
                    skill="Javascript"
                />
                <SkillList
                    src={checkMarkIcon}
                    skill="React"
                />
                <SkillList
                    src={checkMarkIcon}
                    skill="Node"
                />
                <SkillList
                    src={checkMarkIcon}
                    skill="Redux"
                />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList
                    src={checkMarkIcon}
                    skill="Python"
                />
                <SkillList
                    src={checkMarkIcon}
                    skill="Django"
                />
                <SkillList
                    src={checkMarkIcon}
                    skill="Flask"
                />
                <SkillList
                    src={checkMarkIcon}
                    skill="PHP"
                />
                <SkillList
                    src={checkMarkIcon}
                    skill="Wordpress"
                />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList
                    src={checkMarkIcon}
                    skill="Docker"
                />
                <SkillList
                    src={checkMarkIcon}
                    skill="Kubernetes"
                />
                <SkillList
                    src={checkMarkIcon}
                    skill="Git"
                />
                <SkillList
                    src={checkMarkIcon}
                    skill="Google Cloud"
                />
            </div>
        </section>
    )
};

export default Skills;
