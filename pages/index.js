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
import BasicModal from '../components/modal';

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
      '#E7F2F0',
      '#E7F2F0'
    ]
  }, 
  {  
    label: 'Kommunikationsnetze',
    data: [2, 1],
    stack:"",
    backgroundColor: [
      '#dfddeb',
      '#dfddeb'
    ]
  },
  {
    label: 'Geräte',
    data: [1, 3.2],
    stack:"",
    backgroundColor: [
      '#cfe0ea',
      '#cfe0ea'
    ]
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
    <div>
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
              <BasicModal />
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

      <h3 ref={myRef} id="result" style={{textAlign: 'center', marginTop: '5rem'}}>
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

      <div className={styles.resultContainer}>
          <svg className={styles.resultRechenzentrenContainer} width='100%' viewBox="0 0 510 395" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M62.1634 40.5224C66.705 16.9969 87.297 0 111.257 0H459.999C487.614 0 509.999 22.3858 509.999 50V308C509.999 335.614 487.614 358 459.999 358H61.45C30.034 358 6.40147 329.369 12.3564 298.522L62.1634 40.5224Z" fill="#68C9BA"/>
            <path d="M472.682 124.03C502.313 153.207 467.325 181.381 405.745 182.141C283.317 175.137 255.69 81.0076 264.943 59.9029C274.196 38.7983 301.746 38.2223 342.567 81.2153C383.388 124.208 435.643 87.5574 472.682 124.03Z" stroke="white" strokeWidth="1.5"/>
            <foreignObject x="-10%" y="20%" width="100%" height="100%">
              <img className={styles.datacenterSvg} src="datacenter.svg" onError="this.onerror=null; this.src='devices.png'"></img>
            </foreignObject>
            <foreignObject x="40%" y="10%" width="100%" height="100%">
              <h3 className={styles.resultTextOne}>Rechenzentren</h3>
              <h3 className={styles.resultTextTwo}>70.48 <span className={styles.resultTextThree}>g CO2e</span></h3>
              <p className={styles.resultTextFour}>entspricht in etwa: </p>
              <br/>
              <p className={styles.resultTextFive}>Erfahre mehr →</p>
            </foreignObject>
          </svg>
          <svg className={styles.resultNetzwerkeContainer} width='100%' viewBox="0 0 510 395" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M62.1634 40.5224C66.705 16.9969 87.297 0 111.257 0H459.999C487.614 0 509.999 22.3858 509.999 50V308C509.999 335.614 487.614 358 459.999 358H61.45C30.034 358 6.40147 329.369 12.3564 298.522L62.1634 40.5224Z" fill="#d4d2e4"/>
            <ellipse rx="35.0679" ry="18.6437" transform="matrix(0.950089 0.311978 -0.399416 0.91677 440.521 312.032)" stroke="white" strokeWidth="1.5"/>
            <path d="M124.968 253.712C55.2412 265.919 38.3959 201.795 86.0723 127.691C194.343 -12.8766 365.34 28.8655 391.418 56.6612C417.496 84.457 396.539 117.798 296.052 132.395C195.564 146.991 212.128 238.454 124.968 253.712Z" stroke="white" strokeWidth="1.5"/>
            <foreignObject x="-15%" y="10%" width="100%" height="100%">
              <img className={styles.networkSvg} src="network.svg" onError="this.onerror=null; this.src='devices.png'"></img>
            </foreignObject>
            <foreignObject x="40%" y="10%" width="100%" height="100%">
              <h3 className={styles.resultTextOne}>Netzwerke</h3>
              <h3 className={styles.resultTextTwo}>70.48 <span className={styles.resultTextThree}>g CO2e</span></h3>
              <p className={styles.resultTextFour}>entspricht in etwa: </p>
              <br/>
              <p className={styles.resultTextFive}>Erfahre mehr →</p>
            </foreignObject>
          </svg>
          <svg className={styles.resultEndgeräteContainer} width='100%' viewBox="0 0 510 395" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M62.1634 40.5224C66.705 16.9969 87.297 0 111.257 0H459.999C487.614 0 509.999 22.3858 509.999 50V308C509.999 335.614 487.614 358 459.999 358H61.45C30.034 358 6.40147 329.369 12.3564 298.522L62.1634 40.5224Z" fill="#0772BF"/>
            <path d="M248.628 259.341C216.323 227.53 254.467 196.813 321.604 195.985C455.08 203.621 485.2 306.245 475.113 329.254C465.025 352.263 434.988 352.891 390.484 306.019C345.979 259.146 289.009 299.104 248.628 259.341Z" stroke="white" strokeWidth="1.5"/>
            <foreignObject x="-10%" y="20%" width="100%" height="100%">
              <img className={styles.resultSvg} src="devices.svg" onError="this.onerror=null; this.src='devices.png'"></img>
            </foreignObject>
            <foreignObject x="40%" y="10%" width="100%" height="100%">
              <h3 className={styles.resultTextOne}>Endgeräte</h3>
              <h3 className={styles.resultTextTwo}>70.48 <span className={styles.resultTextThree}>g CO2e</span></h3>
              <p className={styles.resultTextFour}>entspricht in etwa: </p>
              <br/>
              <p className={styles.resultTextFive}>Erfahre mehr →</p>
            </foreignObject>
          </svg>
        </div>
    </main>
  </div>  
  <div style={{display: 'flex', justifyContent: 'center', marginTop: '5rem'}}>
    <div className={styles.footer}>
        <div style={{textAlign: 'center'}}>Bachelorarbeit UZH</div>
        <div style={{textAlign: 'center'}}>© 2022</div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', marginTop: '1rem' }}>
          <div>
            <div style={{lineHeight: '0.75rem'}}><a href='https://www.freepik.com/vectors/smart-devices'>Smart devices vector created by macrovector - www.freepik.com</a></div>
            <div style={{lineHeight: '0.75rem'}}><a href="https://www.freepik.com/vectors/data-center">Data center vector created by macrovector - www.freepik.com</a></div>
            <div style={{lineHeight: '0.75rem'}}><a href='https://www.freepik.com/vectors/mobile-tower'>Mobile tower vector created by macrovector - www.freepik.com</a></div>
          </div>
          <div style={{display: 'grid', justifyContent: 'center', alignContent: 'center'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem'}}>
            <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#cfe0ea', display: 'flex', justifyContent: 'center', alignItems: 'center'}} />
            <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#cfe0ea', display: 'flex', justifyContent: 'center', alignItems: 'center'}} />
            </div>
          </div>
        </div>
    </div>
  </div>
  </div>
  );
}

