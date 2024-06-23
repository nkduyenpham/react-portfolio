import styles from "./Project.module.css";
import ProjectCard from "../../reuse/ProjectCard";
import django_ecom from "../../assets/django_ecom.png";
import django_chatbot from "../../assets/django_chatbot.png";
import django_news from "../../assets/django_news.png";
import react_dashboard from "../../assets/react_dashboard.png";
import react_summa from "../../assets/react_summa.png"

const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={react_summa}
                    link="https://article-summarizer-duyen.netlify.app/" h3="Article Summarizer"
                    p="Tech stacks: React, RapidAPI, TailwindCSS" />
                <ProjectCard
                    src={react_dashboard}
                    link="https://github.com/nkduyenpham/react-dashboard.git" h3="Modern Dashboard Visualize Data with Charts"
                    p="Tech stacks: React, Chartjs" />
                <ProjectCard
                    src={django_ecom}
                    link="https://github.com/nkduyenpham/django-ecommerce-boostrap" h3="Full-stack Ecommerce Website"
                    p="Tech stacks: Django, Javascript, Boostrap" />
                <ProjectCard
                    src={django_chatbot}
                    link="https://github.com/nkduyenpham/Chatbot-rapidAPI.git" h3="Modern UI Chatbot"
                    p="Tech stacks: Django, OpenAI, HTML, CSS, JavaScript" />
                <ProjectCard
                    src={django_news}
                    link="https://github.com/nkduyenpham/django-website-using-newsapi.git" h3="News Website Dynamic Content"
                    p="Tech stacks: Django, News API, HTML, CSS, JavaScript" />
            </div>
        </section>
    )
};

export default Projects; 