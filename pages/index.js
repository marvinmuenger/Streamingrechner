import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Chart from 'chart.js/auto'
import {Bar} from 'react-chartjs-2';

const options = {
  scales: {
       xAxes: [{
           stacked: true
       }],
       yAxes: [{
           stacked: true
       }]
   }
}

const data = {
  labels: ['Test 1', 'Test 2'],
  datasets: [{
    label: 'Rechenzentren',
    data: [1, 1],
    stack:"",
    backgroundColor: [
      'rgba(54, 162, 235, 0.6)',
      'rgba(54, 162, 235, 0.6)'
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)'
    ],
    borderWidth: 1
  }, 
  {  
    label: 'Kommunikationsnetze',
    data: [2, 1],
    stack:"",
    backgroundColor: [
      'rgba(75, 192, 192, 0.6)',
      'rgba(75, 192, 192, 0.6)'
    ],
    borderColor: [
      'rgba(75, 192, 192, 1)',
      'rgba(75, 192, 192, 1)'
    ],
    borderWidth: 1
  },
  {
    label: 'Geräte',
    data: [1, 3.2],
    stack:"",
    backgroundColor: [
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 159, 64, 0.6)'
    ],
    borderColor: [
      'rgba(255, 159, 64, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
}

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Energie- und CO<sub>2</sub>-Rechner für Videostreaming
        </h1>

      <div className={styles.wrapper}>
        <select id="device" className={styles.select}>
            <option value="television">Fernsehgerät</option>
            <option value="smartphone">Desktop Computer</option>
            <option value="laptop">Notebook</option>
            <option value="laptop">Tablet</option>
            <option value="laptop">Smartphone</option>
        </select> 

        <select id="auflösung" className={styles.select}>
            <option value="SD">SD</option>
            <option value="HD">HD</option>
            <option value="UHD">UHD 4K</option>
        </select>

        <select id="land" className={styles.select}>
            <option value="UHD">Welt (2020)</option>
            <option value="SD">Schweiz</option>
            <option value="HD">Deutschland</option>
        </select>
      </div>

      <div className={styles.chart}>
        <h2>CO2 Emissionen von 1 Stunde Videostreaming</h2>
        <Bar
          data={data}
          width={10}
          height={2}
          options={options}
        />
      </div>

      </main>
    </div>
  )
}
