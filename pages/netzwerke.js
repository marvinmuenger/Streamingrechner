import styles from '../styles/Home.module.css'

export default function Home() {

    return (
        <div>
            <div className={styles.site}>
                <h1 className={styles.title}>
                    Netzwerke
                </h1>
                <h2>
                    Hier erfährst du mehr über die Netzwerke.
                </h2>
                <main>
                    <card className={styles.settings}>
                        <div className={styles.cardText}>
                        </div>
                    </card>
                </main>
            </div>

        </div>
    );

}