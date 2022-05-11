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
import Info from '../public/info.svg'

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
        <card className={styles.resultRechenzentrenContainer}>
          <card className={styles.resultTextContainer}>
          </card>
        </card>
        <card className={styles.resultNetzwerkeContainer}>
          <card className={styles.resultTextContainer}>
          </card>
        </card>
        <card className={styles.resultEndgeräteContainer}>
          <card className={styles.resultTextContainer}>
          </card>
        </card>
      </card>
    </main>
  </div>  
  );
}

