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
import BasicModal from '../components/modal';
import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const kWhDataCenter = 0.0013;

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

export default function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        <ListItem component="a" href="/rechenzentren" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Rechenzentren" />
          </ListItemButton>
        </ListItem>
        <ListItem component="a" href="/netzwerke" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Netzwerke" />
          </ListItemButton>
        </ListItem>
        <ListItem component="a" href="/endgeraete" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Endgeräte" />
          </ListItemButton>
        </ListItem>
        <div style={{'borderTop': 'rgba(0, 0, 0, 0.3) 1px solid'}}></div>
        <ListItem component="a" href="/faq" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="FAQ" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const [deviceName, setDeviceName] = React.useState(null);
  const [hasDeviceError, setHasDeviceError] = React.useState(false);
  const [connection, setConnection] = React.useState(null);
  const [hastConnectionError, setHasConnectionError] = React.useState(false);
  const [resolution, setResolution] = React.useState(null);
  const [hasResolutionError, setHasResolutionError] = React.useState(false);
  const [country, setCountry] = React.useState(null);
  const [hasCountryError, setHasCountryError] = React.useState(false);

  const handleDeviceChange = (event) => {
    const {
      target: { value },
    } = event;
    setDeviceName(value);
    hideDeviceInput();
  };


  const handleNetworkChange = (event) => {
    const {
      target: { value },
    } = event;
    setConnection(value);
    hideNetworkInput();
  };

  const handleResolutionChange = (event) => {
    const {
      target: { value },
    } = event;
    setResolution(value);
  };

  const handleCountryChange = (event) => {
    const {
      target: { value },
    } = event;

    setCountry(value);
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

  function executeSubmit() {
    validateInput();
  }

  function validateInput() {
    if (!deviceName) {
      setHasDeviceError(true);
    } else {
      setHasDeviceError(false);
    }
    if (!connection) {
      setHasConnectionError(true);
    } else {
      setHasConnectionError(false);
    }
    if (!resolution) {
      setHasResolutionError(true);
    } else {
      setHasResolutionError(false);
    }
    if (!country) {
      setHasCountryError(true);
    } else {
      setHasCountryError(false);
    }
    if (deviceName && connection && resolution && country) {
      setDatacenter(parseFloat(country)*duration*kWhDataCenter);
      setNetwork(parseFloat(country)*duration*parseFloat(connection)*parseFloat(resolution));
      setDevice(parseFloat(country)*duration*parseFloat(deviceName));
      setEmissionFactor(parseFloat(country));

      scrollToRef(myRef)
    }
  }

  const [datacenter, setDatacenter] = React.useState([]);
  const [network, setNetwork] = React.useState([]);
  const [device, setDevice] = React.useState([]);
  const [emissionFactor, setEmissionFactor] = React.useState([]);

  const data = {
    labels: ['Videostreaming', '1km Autofahrt'],
    datasets: [{
      label: 'Rechenzentrum',
      barPercentage: 0.7,
      data: [datacenter, 0],
      stack:"",
      backgroundColor: [
        '#022E51',
        '#022E51'
      ]
    }, 
    {  
      label: 'Kommunikationsnetz',
      barPercentage: 0.7,
      data: [network, 0],
      stack:"",
      backgroundColor: [
        '#8FBAE5',
        '#8FBAE5'
      ]
    },
    {
      label: 'Endgerät',
      barPercentage: 0.7,
      data: [device, 0],
      stack:"",
      backgroundColor: [
        '#70CEB9',
        '#70CEB9'
      ]
    },
    {
      label: 'Autofahrt',
      barPercentage: 0.7,
      data: [0, 185],
      stack:"",
      backgroundColor: [
        '#9EA4D2',
        '#9EA4D2'
      ]
    }, ]
  }

  const emissions = Math.round((datacenter+network+device)*100)/100;
  const energy = Math.round(((datacenter+network+device)/emissionFactor)*100)/100;
  const dataCenterPercentage = Math.round((datacenter/emissions)*100) || 0;
  const networkPercentage = Math.round((network/emissions)*100) || 0;
  const devicePercentage = Math.round((device/emissions)*100) || 0;

  function hideDeviceInput(){
    if (document.getElementById("TV").selected == true || document.getElementById("Computer").selected == true || document.getElementById("Notebook").selected == true){
      document.getElementById("3G").setAttribute("disabled", "disabled");
      document.getElementById("4G").setAttribute("disabled", "disabled");
      document.getElementById("5G").setAttribute("disabled", "disabled");
    }
    else{
      document.getElementById("3G").removeAttribute("disabled");
      document.getElementById("4G").removeAttribute("disabled");
      document.getElementById("5G").removeAttribute("disabled");
    }
  }

  function hideNetworkInput(){
    if (document.getElementById("3G").selected == true || document.getElementById("4G").selected == true || document.getElementById("5G").selected == true){
      document.getElementById("TV").setAttribute("disabled", "disabled");
      document.getElementById("Computer").setAttribute("disabled", "disabled");
      document.getElementById("Notebook").setAttribute("disabled", "disabled");
    }
    else{
      document.getElementById("TV").removeAttribute("disabled");
      document.getElementById("Computer").removeAttribute("disabled");
      document.getElementById("Notebook").removeAttribute("disabled");
    }
  }

  return (
    <div>
    <Box>
      <AppBar component="nav" position="static" color={"secondary"} sx={{ boxShadow: '0 2px 4px -50px rgba(0, 0, 0, 0.2),2px 9px 13px -12px rgba(0, 0, 0, 0.14),0 1px 10px -50px rgba(0, 0, 0, 0.12)' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black !important' }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex'}}}>
            <div style={{display: 'flex', width: 'calc(100vw*0.95)'}}>
              <Button href="/rechenzentren" sx={{color: 'black !important'}}>
                Rechenzentren
              </Button>
              <Button href="/netzwerke" sx={{color: 'black !important'}}>
                Netzwerke
              </Button>
              <Button href="/endgeraete" sx={{color: 'black !important'}}>
                Endgeräte
              </Button>
              <Button href="/faq" sx={{color: 'black !important', marginLeft: 'auto'}}>
                FAQ
              </Button>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          color="secondary"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
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
              <FormControl className={styles.select} error={hasDeviceError}>
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
                  <option id="TV" value={0.074}>TV</option>
                  <option id="Computer" value={0.115}>Computer</option>
                  <option id="Notebook" value={0.022}>Notebook</option>
                  <option id="Tablet" value={0.007}>Tablet</option>
                  <option id="Smartphone" value={0.001}>Smartphone</option>
                </NativeSelect>
              </FormControl>

              <FormControl className={styles.select} error={hasResolutionError}>
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
                  <option value={1}>Standard Definition</option>
                  <option value={3}>Full HD</option>
                  <option value={7}>UHD 4K</option>  
                </NativeSelect>
              </FormControl>

              <FormControl className={styles.select} error={hastConnectionError}>
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
                  <option value={0.022}>WLAN</option>
                  <option id="3G" value={0.447}>3G</option>
                  <option id="4G" value={0.08}>4G</option>
                  <option id="5G" value={0.029}>5G</option>
                </NativeSelect>
              </FormControl>

              <FormControl className={styles.select} error={hasCountryError}>
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
                  <option value={55}>Schweiz</option>
                  <option value={332}>Deutschland</option>
                  <option value={68}>Frankreich</option>
                  <option value={337}>Italien</option>
                  <option value={42}>Schweden</option>
                  <option value={142}>Finnland</option>
                  <option value={143}>Österreich</option>
                  <option value={200}>Spanien</option>
                  <option value={246}>England</option>
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
                onClick={executeSubmit}
                variant="contained" >
                Ausrechnen
              </MuiButton>
            </div>
          </div>
        </div>
      </card>

      <div ref={myRef} id="result" style={{textAlign: 'center', marginTop: '5rem'}}>
        <h3> 
            Resultat:
        </h3>
        <p>
          <strong style={{fontSize: '1.25rem'}}>{emissions}</strong> g CO2e oder <strong style={{fontSize: '1.25rem'}}>{energy || 0}</strong> kWh
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

      <div style={{textAlign: 'left', marginTop: '5rem'}}>
        <h3> 
            Zusammensetzung der CO2-Emissionen:
        </h3>
      </div>

      <div className={styles.resultContainer}>
          <svg className={styles.resultRechenzentrenContainer} width='100%' viewBox="0 0 510 395" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M62.1634 40.5224C66.705 16.9969 87.297 0 111.257 0H459.999C487.614 0 509.999 22.3858 509.999 50V308C509.999 335.614 487.614 358 459.999 358H61.45C30.034 358 6.40147 329.369 12.3564 298.522L62.1634 40.5224Z" fill="#68C9BA"/>
            <path d="M472.682 124.03C502.313 153.207 467.325 181.381 405.745 182.141C283.317 175.137 255.69 81.0076 264.943 59.9029C274.196 38.7983 301.746 38.2223 342.567 81.2153C383.388 124.208 435.643 87.5574 472.682 124.03Z" stroke="white" strokeWidth="1.5"/>
            <foreignObject x="-10%" y="20%" width="100%" height="100%">
              <img className={styles.datacenterSvg} src="datacenter.svg" onError="this.onerror=null; this.src='devices.png'"></img>
            </foreignObject>
            <foreignObject x="40%" y="10%" width="100%" height="100%">
              <br/>
              <h3 className={styles.resultTextOne}>Rechenzentren</h3>
              <h3 className={styles.resultTextTwo}>{Math.round(datacenter*100) / 100}<span className={styles.resultTextThree}> g CO2e</span></h3>
              <p className={styles.resultTextFour}>entspricht in etwa: <strong>{dataCenterPercentage}%</strong> der Gesamtemissionen</p>
              <Link href="/rechenzentren">
                <p className={styles.resultTextFive}>Erfahre mehr →</p>
              </Link>
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
              <br/>
              <h3 className={styles.resultTextOne}>Netzwerke</h3>
              <h3 className={styles.resultTextTwo}>{Math.round(network*100) / 100}<span className={styles.resultTextThree}> g CO2e</span></h3>
              <p className={styles.resultTextFour}>entspricht in etwa: <strong>{networkPercentage}%</strong> der Gesamtemissionen </p>
              <Link href="/netzwerke">
                <p className={styles.resultTextFive}>Erfahre mehr →</p>
              </Link>
            </foreignObject>
          </svg>
          <svg className={styles.resultEndgeräteContainer} width='100%' viewBox="0 0 510 395" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M62.1634 40.5224C66.705 16.9969 87.297 0 111.257 0H459.999C487.614 0 509.999 22.3858 509.999 50V308C509.999 335.614 487.614 358 459.999 358H61.45C30.034 358 6.40147 329.369 12.3564 298.522L62.1634 40.5224Z" fill="#0772BF"/>
            <path d="M248.628 259.341C216.323 227.53 254.467 196.813 321.604 195.985C455.08 203.621 485.2 306.245 475.113 329.254C465.025 352.263 434.988 352.891 390.484 306.019C345.979 259.146 289.009 299.104 248.628 259.341Z" stroke="white" strokeWidth="1.5"/>
            <foreignObject x="-10%" y="20%" width="100%" height="100%">
              <img className={styles.resultSvg} src="devices.svg" onError="this.onerror=null; this.src='devices.png'"></img>
            </foreignObject>
            <foreignObject x="40%" y="10%" width="100%" height="100%">
              <br/>
              <h3 className={styles.resultTextOne}>Endgeräte</h3>
              <h3 className={styles.resultTextTwo}>{Math.round(device*100) / 100}<span className={styles.resultTextThree}> g CO2e</span></h3>
              <p className={styles.resultTextFour}>entspricht in etwa: <strong>{devicePercentage}%</strong> der Gesamtemissionen </p>
              <Link href="/endgeraete">
                <p className={styles.resultTextFive}>Erfahre mehr →</p>
              </Link>
              </foreignObject>
          </svg>
        </div>
    </main>
  </div>  
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
  </div>
  );
}

