import * as React from 'react';
import { useRef } from 'react';
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import NativeSelect from '@mui/material/NativeSelect';
import Chart from 'chart.js/auto'
import {Bar} from 'react-chartjs-2';
import MuiButton from '@mui/material/Button';
import Info from '../public/info.svg';
import BasicModal from '../components/modal';
import Link from 'next/link'

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
                    family: 'Avenir',
                }
            }
        }
    }
}

const scrollToRef = (ref) => window.scrollTo({left: 0, top: ref.current.offsetTop, behavior: 'smooth'});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function Home() {
    const [deviceName, setDeviceName] = React.useState([]);
    const [connection, setConnection] = React.useState([]);
    const [resolution, setResolution] = React.useState([]);
    const [country, setCountry] = React.useState([]);

    const handleDeviceChange = (event) => {
        const {
            target: { value },
        } = event;
        setDeviceName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleNetworkChange = (event) => {
        const {
            target: { value },
        } = event;
        setConnection(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleResolutionChange = (event) => {
        const {
            target: { value },
        } = event;
        setResolution(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleCountryChange = (event) => {
        const {
            target: { value },
        } = event;
        setCountry(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [duration, setDuration] = React.useState(2);

    const handleSliderChange = (event, newDuration) => {
        setDuration(newDuration);
    };

    const handleInputChange = (event) => {
        setDuration(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (duration < 0) {
            setDuration(0);
        } else if (duration > 100) {
            setDuration(100);
        }
    };

    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    return (
        <div>
            <div className={styles.site}>
                <h1 className={styles.title}>
                    Endgeräte
                </h1>
                <h2>
                    Hier erfährst du mehr über die Engeräte.
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