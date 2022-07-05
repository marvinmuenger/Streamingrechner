import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const data = {
    title: "FAQ",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
    ],
};

const faqstyles = {
    bgColor: '#F5F7F6',
    titleTextColor: "#F5F7F6",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

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
                FAQ
            </h1>
            <h2>
                Hier gibt es Antworten zu häufig gestellten Fragen.
            </h2>
            <div style={{marginTop: "-2rem"}}>
                <Faq
                    data={data}
                    styles={faqstyles}
                    config={config}
                />
            </div>
        </div>

    </div>
    );
}