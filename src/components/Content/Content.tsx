import React, { useState } from "react";
import styles from './Content.module.css';
import Card from './../../assets/nx_wave_hero.png';

const Content = () => {
    const [isNumberCorrect, setIsNumberCorrect] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleNumberChange = (val: any) => {
        setPhoneNumber(val);
    }

    return (
        <div className={styles.contentContainer}>
            <div className={styles.leftContent}>
                <div className={styles.mainDetails}>NX Wave. The next-gen credit card for those who love rewards.</div>
                <ul className={styles.list}>
                    <li>1% Cashback</li>
                    <li>5x Rewards</li>
                    <li>Zero Forex Markup</li>
                    </ul>
                <div className={styles.applyContainer}>
                <input type="tel" onChange={(e)=>handleNumberChange(e.target.value)} style={{width:'110px'}}/>
                <div className={phoneNumber.length?styles.corr:styles.opac}>{isNumberCorrect?'C':'W'}</div>
                <div className={styles.applyButton}>Apply Now</div>
                </div>
                <div className={styles.terms}>
                    <input type="checkbox" />
                    <div className={styles.small}>You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</div>
                </div>
            </div>
            <img src={Card} width='30%' height='80%' />
        </div>
    )
};

export default Content;