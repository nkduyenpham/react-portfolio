import styles from "./Introduction.module.css";
import profileImg from "../../assets/duyen.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../reuse/ThemeContext";

const Introduction = () => {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="introduction" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.introduction} src={profileImg} alt="Profile Picture of Duyen" />
                <img className={styles.colorMode} src={themeIcon} alt="color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>Duyen Pham
                </h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://github.com/nkduyenpham" target="_blank">
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://linkedin.com/nkduyenpham" target="_blank">
                        <img src={linkedinIcon} alt="LinkedIn Icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    I'm a passionate website developer with a business mindset, leveraging technology to solve problems and boost revenue. I create impactful digital solutions that transform ideas into success.
                </p>
                <a href={CV} download>
                    <button className="hover" >Resume</button>
                </a>
            </div>
        </section>
    )
};

export default Introduction; 