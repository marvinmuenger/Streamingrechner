import * as React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {

    return (
        <div className={styles.spaceFooter}>
            <Header />
            <div className={styles.site}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <Link href="/" passHref>
                            <div className={styles.backButton}>
                                <svg className={styles.backArrow} xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="100%"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                            </div>
                        </Link>
                        Endgeräte
                    </h1>
                    <h2>
                        Hier erfährst du mehr über die Engeräte.
                    </h2>
                    <main>
                        <card className={styles.textBoxPages}>
                            <p className={styles.cardTextPages}>
                                Der Energieverbrauch des Endgeräts, auf dem gestreamt wird, hängt direkt mit der Bildschirmgrösse des Geräts zusammen. Grosse Fernseher haben einen höheren Energieverbrauch als Smartphones, Tablets oder Notebooks. Bei Geräten wie Smartphones oder Tablets ist der Energieverbrauch durch die Produktion aufgrund ihrer kurzen Lebensdauer relevant, die Berechnungen des Energierechners beziehen sich jedoch ausschliesslich auf die Nutzungsphase. Durch den hohen Energieverbrauch grosser Fernseher sind kleinere Geräte, was den Energieverbrauch betrifft, klar vorzuziehen. Ausserdem ist es sinnvoll, wenn möglich auf weitere Peripheriegeräte (wie z.B. Gamingkonsolen) zu verzichten um den Energieverbrauch auf ein Minimum zu reduzieren.
                            </p>
                        </card>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}