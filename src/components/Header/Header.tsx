import React from "react";
import styles from './Header.module.css';
import Card from './../../assets/nx_wave_hero.png';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <img src={Card} width='10%'/>
            <button className={styles.button}>Uni Paycheck</button>
        </div>
    )
};

export default Header;