import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React from "react";

export default function Home() {

    return (
        <div>
            <div className={styles.site}>
                <h1 className={styles.title}>
                    <Link href="/">
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
                            Die Kommunikationsnetze verbrauchen bei der Übertragung der gewünschten Videodatei an den Nutzer des Streamingangebots Energie. Entscheidend für die Höhe des Energieverbrauch sind hier die Grösse der Videodatei und die Effizienz, wie diese übertragen wird. Dateien werden entweder über Kabel oder über Funkmasten übertragen. Generell verbraucht dabei die Übertragung über Mobilfunk mehr Energie. Glasfaserkabel und 5G sind ihren Vorgängern Kupferkabel, 3G und 4G klar vorzuziehen und ein Ausbau dieser Infrastruktur würde den Energieverbrauch reduzieren. Um die Grösse der Videodatei zu reduzieren und damit den Energieverbrauch zu senken, kann der Nutzer eine geringere Auflösung der gewünschten Videodatei wählen. Ausserdem ermöglichen Komprimierungsstandards immer effektivere Möglichkeiten, die Grösse der Videodateien zu reduzieren.
                        </p>
                    </card>
                </main>
            </div>

        </div>
    );

}