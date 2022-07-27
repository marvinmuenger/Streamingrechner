/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { useRef, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import Header from '../components/header';
import Cards from '../components/cards';
import Resultgraph from '../components/resultgraph';
import BasicModal from '../components/modal';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import NativeSelect from '@mui/material/NativeSelect';
import MuiButton from '@mui/material/Button';

const kWhDataCenter = 0.0013;

const kWhSD = 1;
const kWhHD = 3;
const kWh4K = 7;

const kWhSwitzerland = 55;
const kWhGermany = 332;
const kWhAustria = 143;
const kWhSweden = 42;
const kWhFinland = 142;
const kWhSpain = 200;
const kWhItaly = 337;
const kWhFrance = 68;
const kWhEngland = 246;

const kWhTV = 0.074;
const kWhSmartphone = 0.001;
const kWhNotebook = 0.022;
const kWhTablet = 0.007;
const kWhComputer = 0.115;

const kWhWLAN = 0.022;
const kWh3G = 0.447;
const kWh4G = 0.080;
const kWh5G = 0.029;

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
  const [deviceName, setDeviceName] = React.useState(null);
  const [hasDeviceError, setHasDeviceError] = React.useState(false);
  const [connection, setConnection] = React.useState(null);
  const [hastConnectionError, setHasConnectionError] = React.useState(false);
  const [resolution, setResolution] = React.useState(null);
  const [hasResolutionError, setHasResolutionError] = React.useState(false);
  const [country, setCountry] = React.useState(null);
  const [hasCountryError, setHasCountryError] = React.useState(false);
  const [datacenter, setDatacenter] = React.useState([]);
  const [network, setNetwork] = React.useState([]);
  const [device, setDevice] = React.useState([]);
  const [emissionFactor, setEmissionFactor] = React.useState([]);
  const [duration, setDuration] = React.useState(1);
  const myRef = useRef(null)

  const emissions = Math.round((datacenter+network+device)*100)/100;
  const energy = Math.round(((datacenter+network+device)/emissionFactor)*100)/100;
  const dataCenterPercentage = Math.round((datacenter/emissions)*100) || 0;
  const networkPercentage = Math.round((network/emissions)*100) || 0;
  const devicePercentage = Math.round((device/emissions)*100) || 0;

  const handleSliderChange = (_event, newDuration) => {
    setDuration(newDuration);
    sessionStorage.setItem("duration", newDuration);
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

  const handleDeviceChange = (event) => {
    const {
      target: { value },
    } = event;
    setDeviceName(value);
    hideDeviceInput();
    if (document.getElementById("Smartphone").selected){
      sessionStorage.setItem("device", "Smartphone");
    }
    else if (document.getElementById("Tablet").selected){
      sessionStorage.setItem("device", "Tablet");
    }
    else if (document.getElementById("Notebook").selected){
      sessionStorage.setItem("device", "Notebook");
    }
    else if (document.getElementById("Computer").selected){
      sessionStorage.setItem("device", "Computer");
    }
    else if (document.getElementById("TV").selected){
      sessionStorage.setItem("device", "TV");
    }
  };

  const handleNetworkChange = (event) => {
    const {
      target: { value },
    } = event;
    setConnection(value);
    hideNetworkInput();
    if (document.getElementById("3G").selected){
      sessionStorage.setItem("network", "3G");
    }
    else if (document.getElementById("4G").selected){
      sessionStorage.setItem("network", "4G");
    }
    else if (document.getElementById("5G").selected){
      sessionStorage.setItem("network", "5G");
    }
    else if (document.getElementById("WLAN").selected){
      sessionStorage.setItem("network", "WLAN");
    }
  };

  const handleResolutionChange = (event) => {
    const {
      target: { value },
    } = event;
    setResolution(value);
    if (document.getElementById("SD").selected){
      sessionStorage.setItem("resolution", "SD");
    }
    else if (document.getElementById("FHD").selected){
      sessionStorage.setItem("resolution", "FHD");
    }
    else if (document.getElementById("4K").selected){
      sessionStorage.setItem("resolution", "4K");
    }
  };

  const handleCountryChange = (event) => {
    const {
      target: { value },
    } = event;

    setCountry(value);
    if (document.getElementById("switzerland").selected){
      sessionStorage.setItem("country", "switzerland");
    }
    else if (document.getElementById("germany").selected){
      sessionStorage.setItem("country", "germany");
    }
    else if (document.getElementById("france").selected){
      sessionStorage.setItem("country", "france");
    }
    else if (document.getElementById("italy").selected){
      sessionStorage.setItem("country", "italy");
    }
    else if (document.getElementById("sweden").selected){
      sessionStorage.setItem("country", "sweden");
    }
    else if (document.getElementById("finland").selected){
      sessionStorage.setItem("country", "finland");
    }
    else if (document.getElementById("austria").selected){
      sessionStorage.setItem("country", "austria");
    }
    else if (document.getElementById("spain").selected){
      sessionStorage.setItem("country", "spain");
    }
    else if (document.getElementById("england").selected){
      sessionStorage.setItem("country", "england");
    }
  };

  function executeSubmit() {
    validateInput();
    if (deviceName && connection && resolution && country) {
        scrollToRef(myRef);
    }
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
    setValues();
  }

  function setValues() {
    console.log('Form submitted!');
    if (deviceName && connection && resolution && country) {
      setDatacenter(parseFloat(country)*duration*kWhDataCenter);
      setNetwork(parseFloat(country)*duration*parseFloat(connection)*parseFloat(resolution));
      setDevice(parseFloat(country)*duration*parseFloat(deviceName));
      setEmissionFactor(parseFloat(country));
    }
  }

  function hideDeviceInput(){
    if (document.getElementById("TV").selected || document.getElementById("Computer").selected || document.getElementById("Notebook").selected){
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
    if (document.getElementById("3G").selected || document.getElementById("4G").selected || document.getElementById("5G").selected){
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

  useEffect(() => {
    if (sessionStorage.getItem("device") != null){
      document.getElementById(sessionStorage.getItem("device")).selected = "selected";
      setDeviceName(document.getElementById(sessionStorage.getItem("device")).value);
      hideDeviceInput();
    }
    if (sessionStorage.getItem("resolution") != null){
      document.getElementById(sessionStorage.getItem("resolution")).selected = "selected";
      setResolution(document.getElementById(sessionStorage.getItem("resolution")).value);
    }
    if (sessionStorage.getItem("network") != null){
      document.getElementById(sessionStorage.getItem("network")).selected = "selected";
      setConnection(document.getElementById(sessionStorage.getItem("network")).value);
      hideNetworkInput();
    }
    if (sessionStorage.getItem("country") != null){
      document.getElementById(sessionStorage.getItem("country")).selected = "selected";
      setCountry(document.getElementById(sessionStorage.getItem("country")).value);
    }
    if (sessionStorage.getItem("duration") != null){
      setDuration(Number(sessionStorage.getItem("duration")));
    }
    setValues();

  }, [setValues]);

  return (
    <div>
      <Header />
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
                    <InputLabel id="device-name-label" shrink={deviceName}>Gerät</InputLabel>
                    <NativeSelect
                      labelId="device-label"
                      id="device-name"
                      value={deviceName}
                      onChange={handleDeviceChange}
                      input={<OutlinedInput notched={deviceName} label="Device" />}
                      MenuProps={MenuProps}
                    >
                      <option hidden selected></option>
                      <option id="TV" value={kWhTV}>TV</option>
                      <option id="Computer" value={kWhComputer}>Computer</option>
                      <option id="Notebook" value={kWhNotebook}>Notebook</option>
                      <option id="Tablet" value={kWhTablet}>Tablet</option>
                      <option id="Smartphone" value={kWhSmartphone}>Smartphone</option>
                    </NativeSelect>
                  </FormControl>

                  <FormControl className={styles.select} error={hasResolutionError}>
                    <InputLabel id="resolution-name-label" shrink={resolution}>Auflösung</InputLabel>
                    <NativeSelect
                      labelId="resolution-label"
                      id="device-name"
                      value={resolution}
                      onChange={handleResolutionChange}
                      input={<OutlinedInput notched={resolution} label="Resolution" />}
                      MenuProps={MenuProps}
                    >
                      <option hidden selected></option>
                      <option id="SD" value={kWhSD}>Standard Definition</option>
                      <option id="FHD" value={kWhHD}>Full HD</option>
                      <option id="4K" value={kWh4K}>UHD 4K</option>
                    </NativeSelect>
                  </FormControl>

                  <FormControl className={styles.select} error={hastConnectionError}>
                    <InputLabel id="network-name-label" shrink={connection}>Netzwerk</InputLabel>
                    <NativeSelect
                      labelId="network-label"
                      id="network-name"
                      value={connection}
                      onChange={handleNetworkChange}
                      input={<OutlinedInput notched={connection} label="Connection" />}
                      MenuProps={MenuProps}
                    >
                      <option hidden selected></option>
                      <option id="WLAN" value={kWhWLAN}>WLAN</option>
                      <option id="3G" value={kWh3G}>3G</option>
                      <option id="4G" value={kWh4G}>4G</option>
                      <option id="5G" value={kWh5G}>5G</option>
                    </NativeSelect>
                  </FormControl>

                  <FormControl className={styles.select} error={hasCountryError}>
                    <InputLabel id="country-name-label" shrink={country}>Land</InputLabel>
                    <NativeSelect
                      labelId="country-label"
                      id="country-name"
                      value={country}
                      onChange={handleCountryChange}
                      input={<OutlinedInput notched={country} label="Land" />}
                      MenuProps={MenuProps}
                    >
                      <option hidden selected></option>
                      <option id="switzerland" value={kWhSwitzerland}>Schweiz</option>
                      <option id="germany" value={kWhGermany}>Deutschland</option>
                      <option id="france" value={kWhFrance}>Frankreich</option>
                      <option id="italy" value={kWhItaly}>Italien</option>
                      <option id="sweden" value={kWhSweden}>Schweden</option>
                      <option id="finland" value={kWhFinland}>Finnland</option>
                      <option id="austria" value={kWhAustria}>Österreich</option>
                      <option id="spain" value={kWhSpain}>Spanien</option>
                      <option id="england" value={kWhEngland}>England</option>
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
          <div id="result" ref = { myRef }>
            <Resultgraph
              Datacenter = { datacenter }
              Device = { device }
              Network = { network }
              Emissions = { emissions }
              Energy = { energy }
            />
          </div>

          <div style={{textAlign: 'left', marginTop: '5rem', marginBottom: '-1rem'}}>
              <h3> 
                  Zusammensetzung der CO2-Emissionen:
              </h3>
          </div>
          <Cards 
            Datacenter = { datacenter } 
            DataCenterPercentage = { dataCenterPercentage } 
            Network = { network }
            NetworkPercentage = {networkPercentage }
            Device = { device }
            DevicePercentage = { devicePercentage }
          />
        </main>
    </div>  
    <Footer />
  </div>
  );
}

