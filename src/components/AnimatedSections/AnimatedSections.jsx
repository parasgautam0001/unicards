import React, { useState } from "react";
import styles from './AnimatedSections.module.css';
import Card from './../../assets/nx_wave_hero.png';

const FadeInSection = ({
    children,
  }) => {
    const domRef = React.useRef();
    
    const [isVisible, setVisible] = React.useState(false);
  
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {   
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
      
      observer.observe(domRef.current);
      
      return () => observer.disconnect();
    }, []);
  
    return (<section ref={ domRef } className={`${styles.sectionContainer} ${isVisible ? styles.isvisible : '' }`}>{ children }</section>);
  };

const AnimatedSections = () => {
    return (
        <main>
            <div className={styles.animatedText}>Earn 1% assured cashback on your spends. Get 5X

more value than cashback at the Uni Store. Enjoy

round the clock Whatsapp support. And it's

lifetime free; no joining fee, no annual charges.</div>
           { [1, 2, 3, 4, 5, 6, 7, 8].map(number => (
        <FadeInSection key={ number }>
            <div className={styles.indiSections}>
            <div>Details</div>
            <img src={Card} width='50%'/>
            </div>
        </FadeInSection>
      ))
           }
        </main>
    )
};

export default AnimatedSections;