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
                    Rechenzentren
                </h1>
                <h2>
                    Hier erfährst du mehr über die Rechenzentren.
                </h2>
                <main>
                    <card className={styles.textBoxPages}>
                        <p className={styles.cardTextPages}>
                            Rechenzentren sind grosse Gebäude, in denen die Videodateien, die für das Streaming benötigt werden, gespeichert und für den jeweiligen Nutzer, der darauf zugreifen will, bereitgestellt werden. Ihr Energieverbrauch setzt sich aus Servern, der Kühlung der Server und der restlichen Infrastruktur zusammen. Zur Infrastruktur eines Rechenzentrums gehören komplexe Brandschutzsysteme, unterbrechungsfreie Stromversorgung, Sicherheitssysteme und sonstige Geräte, die für die Betreibung des Gebäudes nötig sind. Die Server sind für den grössten Teil des Energieverbrauchs verantwortlich. Nach den Servern hat die Kühlung den grössten Anteil am Energieverbrauch eines Rechenzentrums. Der Energieverbrauch durch die Kühlung und die restliche Infrastruktur hängen jedoch direkt von der Anzahl der Server und der Menge an Energie ab, die von den Servern in Wärme umgewandelt wird.
                        </p>
                    </card>
                </main>
            </div>
        </div>
    );
    
}