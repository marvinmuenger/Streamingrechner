import * as React from 'react';
import styles from '../styles/Home.module.css'
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const options = {
    scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
    },
    maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                font: {
                    family: 'Arial',
                }
            }
        }   
    }
}

export default function Resultgraph(props) {
    const data = {
        labels: ['Videostreaming', '1km Autofahrt'],
        datasets: [{
            label: 'Rechenzentrum',
            barPercentage: 0.7,
            data: [props.Datacenter, 0],
            stack:"",
            backgroundColor: [
            '#022E51',
            '#022E51'
            ]
        }, 
        {  
            label: 'Kommunikationsnetz',
            barPercentage: 0.7,
            data: [props.Network, 0],
            stack:"",
            backgroundColor: [
            '#8FBAE5',
            '#8FBAE5'
            ]
        },
        {
            label: 'Endgerät',
            barPercentage: 0.7,
            data: [props.Device, 0],
            stack:"",
            backgroundColor: [
            '#70CEB9',
            '#70CEB9'
            ]
        },
        {
            label: 'Autofahrt',
            barPercentage: 0.7,
            data: [0, props.Car],
            stack:"",
            backgroundColor: [
            '#9EA4D2',
            '#9EA4D2'
            ]
        }, ]
    }

    return (
        <div>
            <div style={{textAlign: 'center', marginTop: '5rem'}}>
                <h3> 
                    Resultat:
                </h3>
                <p>
                <strong style={{fontSize: '1.25rem'}}>{props.Emissions}</strong> g CO2e oder <strong style={{fontSize: '1.25rem'}}>{props.Energy || 0}</strong> kWh
                </p>
            </div>

            <card className={styles.chartcontainer}>
                <div className={styles.chart}>
                <Bar
                    data={data}
                    width={10}
                    height={2}
                    options={options}
                />
                </div>
            </card>
        </div>
    )
}