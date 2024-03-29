import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

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
                        Netzwerke
                    </h1>
                    <h2>
                        Hier erfährst du mehr über die Netzwerke.
                    </h2>
                    <main>
                        <card className={styles.textBoxPages}>
                            <p className={styles.cardTextPages}>
                                Die Kommunikationsnetze verbrauchen bei der Übertragung der gewünschten Videodatei an den Nutzer des Streamingangebots Energie. Entscheidend für die Höhe des Energieverbrauchs sind hier die Grösse der Videodatei und die Effizienz der Infrastruktur und Netzwerkgeräte. Dateien werden entweder über das Festnetz oder das Mobilfunknetz übertragen. Generell wird bei der Übertragung mit dem Festnetz weniger Energie benötigt. Die neuen Netzwerkgenerationen (Glasfaserkabel und 5G) sind ihren Vorgängern Kupferkabel, 3G und 4G klar vorzuziehen und ein Ausbau dieser Infrastruktur kann den Energieverbrauch erheblicb reduzieren. Um die Grösse der Videodatei zu reduzieren und damit den Energieverbrauch zu senken, kann der Nutzer eine geringere Auflösung wählen. Ausserdem ermöglichen Komprimierungsstandards immer effektivere Möglichkeiten, die Grösse der Videodateien zu reduzieren.
                            </p>
                        </card>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );

}