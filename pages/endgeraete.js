import * as React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {

    return (
        <div>
            <Header />
            <div className={styles.site}>
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
                            Der Energieverbrauch des Endgeräts, auf dem gestreamt wird, hängt direkt mit der Bildschirmgrösse des Endgeräts zusammen. Grosse Fernseher haben einen massiv höheren Energieverbrauch als Handys, Tablets oder Notebooks. Jedoch ist bei Geräten wie Handys oder Tablets der Energieverbrauch durch die Produktion aufgrund ihrer kurzen Lebensdauer ebenfalls relevant. Durch den hohen Energieverbrauch grosser Fernseher während der Nutzung, sind kleinere Geräte wie Handys, Tablets oder Notebooks, was den Energieverbrauch betrifft, klar vorzuziehen. Durch die Wahl eines kleineren Geräts kann der Nutzer eine Menge Energie einsparen.
                        </p>
                    </card>
                </main>
            </div>
            <Footer />
        </div>
    );
}