import styles from "./NavbarStyles.module.css";

const Navbar = () => {
    return (
        <div id="navbar" className={styles.container}>
            <ul>
                <li><a href="#introduction">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;