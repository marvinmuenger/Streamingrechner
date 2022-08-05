import * as React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Footer() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '5rem', marginBottom: '2rem'}}>
            <box className={styles.footer}>
                <div style={{textAlign: 'center'}}>Bachelorarbeit UZH</div>
                <div style={{textAlign: 'center'}}>© 2022</div>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', marginTop: '1rem', height: '40px' }}>
                <div style={{display: 'grid', justifyContent: 'start', alignContent: 'center'}}>
                    <div style={{lineHeight: '0.75rem'}}><a href='https://www.freepik.com/vectors/smart-devices'>Smart devices vector</a><a href="https://www.freepik.com/vectors/data-center">, data center vector</a><a href='https://www.freepik.com/vectors/mobile-tower'>, mobile tower vector </a><a href='https://www.flaticon.com/de/kostenloses-icon/pdf-datei_80942?term=pdf&page=1&position=7&page=1&position=7&related_id=80942&origin=tag'>, and pdf vector</a><a href='https://www.freepik.com/'> created by macrovector - www.freepik.com</a></div>
                </div>
                <div style={{display: 'grid', justifyContent: 'end', alignContent: 'center'}}>
                <div style={{display: 'grid', gridTemplateRows: 'repeat(2, 1fr)'}}>
                <div style={{fontSize: '0.75rem'}}>PDF Bachelorarbeiten</div>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '-0.5rem'}}>
                    <Link  href='/files/Bachelorarbeit_Muenger.pdf' passHref alt='Energieverbrauch und CO2-Emissionen durch Videostreaming in Abhängigkeit von technischen und geographischen Parametern' target='_blank' rel='noopener norefferer'>
                        <div style={{width: '40px', height: '40px', cursor: 'pointer', borderRadius: '50%', backgroundColor: '#cfe0ea', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src='/pdf-datei.png' width='14.5px' className={styles.filterColor}/></div>
                    </Link>
                    <Link  href='/files/test.pdf' passHref alt='Energieverbrauch und CO2-Emissionen durch Videostreaming in Abhängigkeit von technischen und geographischen Parametern' target='_blank' rel='noopener norefferer'>
                        <div style={{width: '40px', height: '40px', cursor: 'pointer', borderRadius: '50%', backgroundColor: '#cfe0ea', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src='/pdf-datei.png' width='14.5px' className={styles.filterColor}/></div>
                    </Link>
                    </div>
                </div>
                </div>
                </div>
            </box>
        </div>
    )
}