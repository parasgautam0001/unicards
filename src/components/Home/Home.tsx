import React from "react";
import styles from './Home.module.css';
import Header from "../Header/Header.tsx";
import Content from "../Content/Content.tsx";
import AnimatedSections from "../AnimatedSections/AnimatedSections.jsx";

const Home = () => {
    return (
        <>
        <div className={styles.homeBg}>
            <Header />
            <Content />
        </div>
        <AnimatedSections />
        </>
    )
};

export default Home;