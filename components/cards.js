/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Cards(props) {
    return (
        <div>
            <div className={styles.resultContainer}>
                <svg className={styles.resultRechenzentrenContainer} width='100%' viewBox="0 0 510 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M62.1634 40.5224C66.705 16.9969 87.297 0 111.257 0H459.999C487.614 0 509.999 22.3858 509.999 50V308C509.999 335.614 487.614 358 459.999 358H61.45C30.034 358 6.40147 329.369 12.3564 298.522L62.1634 40.5224Z" fill="#68C9BA"/>
                <path d="M472.682 124.03C502.313 153.207 467.325 181.381 405.745 182.141C283.317 175.137 255.69 81.0076 264.943 59.9029C274.196 38.7983 301.746 38.2223 342.567 81.2153C383.388 124.208 435.643 87.5574 472.682 124.03Z" stroke="white" strokeWidth="1.5"/>
                <foreignObject x="-10%" y="20%" width="90%" height="100%">
                    <img className={styles.datacenterSvg} alt="datacenter" src="datacenter.svg" onError="this.onerror=null; this.src='devices.png'"></img>
                </foreignObject>
                <foreignObject x="40%" y="10%" width="100%" height="100%">
                    <br/>
                    <h3 className={styles.resultTextOne}>Rechenzentren</h3>
                    <h3 className={styles.resultTextTwo}>{Math.round(props.Datacenter*100) / 100}<span className={styles.resultTextThree}> g CO2e</span></h3>
                    <p className={styles.resultTextFour}>entspricht in etwa: <strong>{props.DataCenterPercentage}%</strong> der Gesamtemissionen</p>
                    <Link passHref href="/rechenzentren">
                    <p className={styles.resultTextFive}>Erfahre mehr →</p>
                    </Link>
                </foreignObject>
                </svg>
                <svg className={styles.resultNetzwerkeContainer} width='100%' viewBox="0 0 510 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M62.1634 40.5224C66.705 16.9969 87.297 0 111.257 0H459.999C487.614 0 509.999 22.3858 509.999 50V308C509.999 335.614 487.614 358 459.999 358H61.45C30.034 358 6.40147 329.369 12.3564 298.522L62.1634 40.5224Z" fill="#d4d2e4"/>
                <ellipse rx="35.0679" ry="18.6437" transform="matrix(0.950089 0.311978 -0.399416 0.91677 440.521 312.032)" stroke="white" strokeWidth="1.5"/>
                <path d="M124.968 253.712C55.2412 265.919 38.3959 201.795 86.0723 127.691C194.343 -12.8766 365.34 28.8655 391.418 56.6612C417.496 84.457 396.539 117.798 296.052 132.395C195.564 146.991 212.128 238.454 124.968 253.712Z" stroke="white" strokeWidth="1.5"/>
                <foreignObject x="-15%" y="10%" width="100%" height="100%">
                    <img className={styles.networkSvg} src="network.svg" alt="network" onError="this.onerror=null; this.src='devices.png'"></img>
                </foreignObject>
                <foreignObject x="40%" y="10%" width="100%" height="100%">
                    <br/>
                    <h3 className={styles.resultTextOne}>Netzwerke</h3>
                    <h3 className={styles.resultTextTwo}>{Math.round(props.Network*100) / 100}<span className={styles.resultTextThree}> g CO2e</span></h3>
                    <p className={styles.resultTextFour}>entspricht in etwa: <strong>{props.NetworkPercentage}%</strong> der Gesamtemissionen </p>
                    <Link passHref href="/netzwerke">
                    <p className={styles.resultTextFive}>Erfahre mehr →</p>
                    </Link>
                </foreignObject>
                </svg>
                <svg className={styles.resultEndgeräteContainer} width='100%' viewBox="0 0 510 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M62.1634 40.5224C66.705 16.9969 87.297 0 111.257 0H459.999C487.614 0 509.999 22.3858 509.999 50V308C509.999 335.614 487.614 358 459.999 358H61.45C30.034 358 6.40147 329.369 12.3564 298.522L62.1634 40.5224Z" fill="#0772BF"/>
                <path d="M248.628 259.341C216.323 227.53 254.467 196.813 321.604 195.985C455.08 203.621 485.2 306.245 475.113 329.254C465.025 352.263 434.988 352.891 390.484 306.019C345.979 259.146 289.009 299.104 248.628 259.341Z" stroke="white" strokeWidth="1.5"/>
                <foreignObject x="-10%" y="20%" width="100%" height="100%">
                    <img className={styles.resultSvg} src="devices.svg" alt="devices" onError="this.onerror=null; this.src='devices.png'"></img>
                </foreignObject>
                <foreignObject x="40%" y="10%" width="100%" height="100%">
                    <br/>
                    <h3 className={styles.resultTextOne}>Endgeräte</h3>
                    <h3 className={styles.resultTextTwo}>{Math.round(props.Device*100) / 100}<span className={styles.resultTextThree}> g CO2e</span></h3>
                    <p className={styles.resultTextFour}>entspricht in etwa: <strong>{props.DevicePercentage}%</strong> der Gesamtemissionen </p>
                    <Link passHref href="/endgeraete">
                    <p className={styles.resultTextFive}>Erfahre mehr →</p>
                    </Link>
                    </foreignObject>
                </svg>
            </div>
        </div>
    )
}
