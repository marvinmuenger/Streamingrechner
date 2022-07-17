import * as React from 'react';
import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '5rem'}}>
            <box className={styles.footer}>
                <div style={{textAlign: 'center'}}>Bachelorarbeit UZH</div>
                <div style={{textAlign: 'center'}}>© 2022</div>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', marginTop: '1rem', height: '40px' }}>
                <div style={{display: 'grid', justifyContent: 'start', alignContent: 'center'}}>
                    <div style={{lineHeight: '0.75rem'}}><a href='https://www.freepik.com/vectors/smart-devices'>Smart devices vector</a><a href="https://www.freepik.com/vectors/data-center">, data center vector</a><a href='https://www.freepik.com/vectors/mobile-tower'> and mobile tower vector</a><a href='https://www.freepik.com/'> created by macrovector - www.freepik.com</a></div>
                </div>
                <div style={{display: 'grid', justifyContent: 'end', alignContent: 'center'}}>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem'}}>
                    <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#cfe0ea', display: 'flex', justifyContent: 'center', alignItems: 'center'}} />
                    <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#cfe0ea', display: 'flex', justifyContent: 'center', alignItems: 'center'}} />
                    </div>
                </div>
                </div>
            </box>
        </div>
    )
}