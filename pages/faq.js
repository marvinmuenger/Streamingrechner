import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from "../components/header";
import Footer from "../components/footer";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "Was kann ich als Endnutzer tun, um den Energieverbrauch durch Streaming zu reduzieren?",
            content: `Ein kleineres Gerät wie ein Tablet oder ein Smartphone verbraucht weniger Energie. Die Helligkeit des Endgeräts kann reduziert werden und am umweltfreundlichsten ist es, über das Festnetz oder das 5G-Mobilfunknetz mit einer niedrigen Auflösung zu streamen.`,
        },
        {
            title: "Was können Rechenzentren tun, um ihren Energieverbrauch zu reduzieren?",
            content: `Rechenzentren können ihren Energieverbrauch reduzieren, indem sie die Energieeffizienz und die Auslastung der Server erhöhen. Abgesehen davon bietet Software mit der Konsolidierung und Virtualisierung von Rechenzentrumsarbeitslasten in die Cloud erhebliche Effizienzgewinne. Zuletzt gibt es verschiedene nachhaltige
            Konzepte wie die freie Kühlung, um den Energieverbrauch durch die Kühlung zu reduzieren.`,
        },
        {
            title: "Ist es umweltfreundlicher mit dem Mobilfunknetz oder mit dem Festnetz zu streamen?",
            content: `Die Datenübertragung über das Festnetz benötigt weniger Energie als die Übertragung über das Mobilfunknetz. Beim Mobilfunknetz gibt es insbesondere erhebliche Unterschiede zwischen den verschiedenen Netzwerkgenerationen. Mit der fünften Mobilfunkgeneration 5G (LTE) wird mittlerweile eine hohe Datenrate, kurze Latenzzeit und gute Skalierbarkeit geboten, sodass der Unterschied zum Festnetz nicht mehr gross ist.`,
        },
        {
            title: "Weshalb ist die CO2-Auslastung in den verschiedenen Ländern unterschiedlich gross?",
            content: `Die Emissionen werden mit einem länderspezifischen Strommix berechnet. Verschiedene Länder erzeugen, importieren und nutzen Energien auf unterschiedliche Art und Weise und setzen unterschiedliche Mischungen aus erneuerbaren und konventionellen Energien ein. Auch wenn der Stromverbrauch in den Ländern gleich gross ist, hat der Strommix zuletzt einen entscheidenden Einfluss auf die Umweltauswirkungen.`,
        },
        {
            title: "Wie exakt sind die Angaben zu den Energie- und Emissionswerten?",
            content: `Die Berechnungen basieren auf Literaturdaten, die den aktuellen Forschungsstand wiederspiegeln. Da keine eindeutige Berechnungsmethode vorliegt, sind die Angaben implizit mit einigen Limitation verbunden. Zum Einen wurde jeweils nur die Nutzungsphase der Geräte betrachtet (ohne Herstellung und Transport). Ausserdem gibt es Unsicherheiten bei der Berechnung des Energieverbrauchs von Netzkomponenten, da es derzeit an quantitativen Daten mangelt und geeignete Berechnungsmethoden weiter validiert und verfeinert werden müssen.`,
        },
        {
            title: "Wie wird sich der Energieverbrauch in der Zukunft entwickeln?",
            content: `Es werden für die Zukunft noch weitere Effizienzsteigerungen erwartet, die den Energieverbrauch und damit die THG-Emissionen einer Stunde Videostreaming weiter senken werden. Gleichermassen wird jedoch erwartet, dass der weltweite Videokonsum weiter steigt, sodass die Gesamtemissionen voraussichtlich auf einem konstanten Niveau stagnieren oder gar ansteigen.`,
        }
    ],
};

const faqstyles = {
    bgColor: '#F5F7F6',
    titleTextColor: "#F5F7F6",
    rowTitleColor: "black",
    rowContentColor: 'darkslategray',
};

const config = {
    animate: true,
    tabFocus: true
};

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
                        FAQ
                    </h1>
                    <h2>
                        Hier gibt es Antworten zu häufig gestellten Fragen.
                    </h2>
                    <div style={{marginTop: "-2rem", marginLeft: "0.5rem", width: "95%"}}>
                        <Faq
                            data={data}
                            styles={faqstyles}
                            config={config}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}