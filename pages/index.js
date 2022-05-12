/* eslint-disable @next/next/no-img-element */
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

const data = {
  labels: ['Test 1', 'Test 2'],
  datasets: [{
    label: 'Rechenzentren',
    data: [1, 1],
    stack:"",
    backgroundColor: [
      '#7FD1AE',
      '#7FD1AE'
    ],
    borderColor: [
      '#7FD1AE',
      '#7FD1AE'
    ],
    borderWidth: 1
  }, 
  {  
    label: 'Kommunikationsnetze',
    data: [2, 1],
    stack:"",
    backgroundColor: [
      '#8AB0CD',
      '#8AB0CD'
    ],
    borderColor: [
      '#8AB0CD',
      '#8AB0CD'
    ],
    borderWidth: 1
  },
  {
    label: 'Geräte',
    data: [1, 3.2],
    stack:"",
    backgroundColor: [
      '#C9FDFF',
      '#C9FDFF'
    ],
    borderColor: [
      '#C9FDFF',
      '#C9FDFF'
    ],
    borderWidth: 1
  }]
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

const devices = [
  'TV',
  'Computer',
  'Notebook',
  'Tablet',
  'Smartphone'
];

const connections = [
  'WLAN',
  '3G',
  '4G',
  '5G'
];

const resolutions = [
  'SD',
  'HD',
  'UHD 4K'
];

const countries = [
  'Schweiz',
  'Deutschland',
  'Frankreich',
  'Italien',
  'Spanien',
  'USA'
];

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
    <div className={styles.site}>
      <h1 className={styles.title}>
        Streaming Energie- und CO2-Rechner
      </h1>

      <h2>
        Mit diesem Rechner kannst du den Energieverbrauch und die CO2-Emissionen eines Video-Streams berechnen.
      </h2>

      <main>
        <card className={styles.settings}>
          <div className={styles.cardText}>
            <h3 style={{overflow: 'visible'}}>
              <Info style={{overflow: 'visible', float: 'right', marginTop: '-1.2rem', marginRight: '0.3rem', marginBottom: '1rem', width: '20px', color: 'rgba(0, 0, 0, 0.75)'}} className={styles.info} />
              Finde heraus, wieviel CO2 du beim Videostreamen verursachst
            </h3>
            <p className={styles.paragraph}>
              Der Energieverbrauch eines Videostreams ist von mehreren Faktoren, wie dem Endgerät, der Videoauflösung und der Netzwerkverbindung, abhängig.
            </p>
          </div>
          <div className={styles.controls}>
            <div className={styles.cardWrapper}>
            <div className={styles.selectContainer}>
              <FormControl className={styles.select}>
                <InputLabel id="device-name-label">Gerät</InputLabel>
                <NativeSelect
                  labelId="device-label"
                  id="device-name"
                  value={deviceName}
                  onChange={handleDeviceChange}
                  input={<OutlinedInput label="Device" />}
                  MenuProps={MenuProps}
                >
                  <option hidden selected></option>
                  {devices.map((name) => (
                    <option
                      key={name}
                      value={name}
                    >
                      {name}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>

              <FormControl className={styles.select}>
                <InputLabel id="resolution-name-label">Auflösung</InputLabel>
                <NativeSelect
                  labelId="resolution-label"
                  id="device-name"
                  value={resolution}
                  onChange={handleResolutionChange}
                  input={<OutlinedInput label="Resolution" />}
                  MenuProps={MenuProps}
                >
                  <option hidden selected></option>
                  {resolutions.map((resolution) => (
                    <option
                      key={resolution}
                      value={resolution}
                    >
                      {resolution}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>

              <FormControl className={styles.select}>
                <InputLabel id="network-name-label">Netzwerk</InputLabel>
                <NativeSelect
                  labelId="network-label"
                  id="network-name"
                  value={connection}
                  onChange={handleNetworkChange}
                  input={<OutlinedInput label="Connection" />}
                  MenuProps={MenuProps}
                >
                  <option hidden selected></option>
                  {connections.map((connection) => (
                    <option
                      key={connection}
                      value={connection}
                    >
                      {connection}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>

              <FormControl className={styles.select}>
                <InputLabel id="country-name-label">Land</InputLabel>
                <NativeSelect
                  labelId="country-label"
                  id="country-name"
                  value={country}
                  onChange={handleCountryChange}
                  input={<OutlinedInput label="Land" />}
                  MenuProps={MenuProps}
                >
                  <option hidden selected></option>
                  {countries.map((country) => (
                    <option
                      key={country}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </div>

            <div style={{display:'grid', gridTemplateColumns: '1fr', alignItems: 'center'}}>
              <Box>
                <a id="input-slider" gutterBottom className={styles.label}>
                  Dauer (Stunden)
                </a>
                <Grid container alignItems="center" justifyContent="center">
                  <Grid item xs>
                    <Slider
                      value={typeof duration === 'number' ? duration : 0}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                      defaultValue={1}
                      step={0.1}
                      max={24}
                    />
                  </Grid>
                  <Grid item>
                    <MuiInput
                      className={styles.input}
                      sx={{ ml: 1.5 }}
                      value={duration}
                      size="small"
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      inputProps={{
                        step: 0.5,
                        min: 0,
                        max: 24,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </div>

            <div>
              <MuiButton
                onClick={executeScroll}
                variant="contained" >
                Ausrechnen
              </MuiButton>
            </div>
          </div>
        </div>
      </card>

      <h3 ref={myRef} id="result" style={{textAlign: 'center'}}>
          Resultat
      </h3>

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

      <card className={styles.resultContainer}>
        <div className={styles.test}>
          test
        </div>
        <svg className={styles.resultRechenzentrenContainer} width='80%' viewBox="0 0 510 388" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.1" d="M57.3245 94.8361C61.7806 71.7533 64.0087 60.212 69.979 51.5731C75.2434 43.9558 82.5196 37.9499 90.9967 34.2248C100.611 30.0002 112.365 30.0002 135.874 30.0002H429.854C457.857 30.0002 471.858 30.0002 482.554 35.4499C491.962 40.2436 499.611 47.8926 504.405 57.3007C509.854 67.9963 509.854 81.9976 509.854 110V308C509.854 336.003 509.854 350.004 504.405 360.7C499.611 370.108 491.962 377.757 482.554 382.551C471.858 388 457.857 388 429.854 388H97.6502C64.4015 388 47.7772 388 36.095 381.18C25.8473 375.197 18.0616 365.764 14.1295 354.568C9.64704 341.805 12.7982 325.482 19.1005 292.836L57.3245 94.8361Z" fill="#68C9BA"/>
          <path d="M472.682 124.03C502.313 153.207 467.325 181.381 405.745 182.141C283.317 175.137 255.69 81.0076 264.943 59.9029C274.196 38.7983 301.746 38.2223 342.567 81.2153C383.388 124.208 435.643 87.5574 472.682 124.03Z" stroke="white" strokeWidth="1.5"/>
          <ellipse rx="19.1053" ry="10.1572" transform="matrix(0.950089 0.311978 -0.399416 0.91677 352.45 89.1504)" stroke="white" strokeWidth="1.5"/>
        </svg>
        <svg className={styles.resultNetzwerkeContainer} width='80%' viewBox="0 0 510 388" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.1" d="M61.3476 46.5239C65.8892 22.9984 86.4812 6.00153 110.441 6.00153H459.184C486.798 6.00153 509.184 28.3873 509.184 56.0015V314.002C509.184 341.616 486.798 364.002 459.184 364.002H60.6342C29.2183 364.002 5.58569 335.37 11.5406 304.524L61.3476 46.5239Z" fill="#2D9CDB"/>
          <ellipse rx="35.0679" ry="18.6437" transform="matrix(0.950089 0.311978 -0.399416 0.91677 440.521 312.032)" stroke="white" strokeWidth="1.5"/>
          <path d="M124.968 253.712C55.2412 265.919 38.3959 201.795 86.0723 127.691C194.343 -12.8766 365.34 28.8655 391.418 56.6612C417.496 84.457 396.539 117.798 296.052 132.395C195.564 146.991 212.128 238.454 124.968 253.712Z" stroke="white" strokeWidth="1.5"/>
        </svg>
        <svg className={styles.resultEndgeräteContainer} width='80%' viewBox="0 0 510 395" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.1" d="M62.1634 40.5224C66.705 16.9969 87.297 0 111.257 0H459.999C487.614 0 509.999 22.3858 509.999 50V308C509.999 335.614 487.614 358 459.999 358H61.45C30.034 358 6.40147 329.369 12.3564 298.522L62.1634 40.5224Z" fill="#0772BF"/>
          <path d="M248.628 259.341C216.323 227.53 254.467 196.813 321.604 195.985C455.08 203.621 485.2 306.245 475.113 329.254C465.025 352.263 434.988 352.891 390.484 306.019C345.979 259.146 289.009 299.104 248.628 259.341Z" stroke="white" strokeWidth="1.5"/>
        </svg>
      </card>
    </main>
  </div>  
  );
}

