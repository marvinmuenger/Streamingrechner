/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Card } from '@mui/material';
import { style } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

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
  'Fernsehgerät',
  'Desktop Computer',
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: 0,
      label: '0h',
    },
    {
      value: 6,
      label: '6h',
    },
    {
      value: 12,
      label: '12h',
    },
    {
      value: 24,
      label: '24h',
    },
  ];

  function valuetext(value) {
    return `${value}h`;
  }

  const [duration, setDuration] = React.useState(30);

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

  return (
    <div>
      <h1 className={styles.title}>
        Streaming Energie- und CO2-Rechner
      </h1>

      <p className={styles.description}>
        Mit diesem Rechner können Sie die Energie- und CO2-Emissionen eines Streaming-Geräts berechnen.
      </p>

      <main className={styles.main}>
        <Card className={styles.card}>
            <div className={styles.wrapper}>
            <div className={styles.container}>
            <div className={styles.inline}>
              <FormControl sx={{ mt: 2.5, mb: 2.5, ml: 1, mr: 1, textAlign: 'left' }} size="small">
                <InputLabel id="device-name-label">Gerät</InputLabel>
                <Select
                  labelId="device-label"
                  id="device-name"
                  value={deviceName}
                  onChange={handleDeviceChange}
                  input={<OutlinedInput label="Device" />}
                  MenuProps={MenuProps}
                  className={styles.select}
                >
                  {devices.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ mt: 2.5, mb: 2.5, ml: 1, mr: 1, textAlign: 'left'  }} size="small">
                <InputLabel id="resolution-name-label">Auflösung</InputLabel>
                <Select
                  labelId="resolution-label"
                  id="device-name"
                  value={resolution}
                  onChange={handleResolutionChange}
                  input={<OutlinedInput label="Resolution" />}
                  MenuProps={MenuProps}
                  className={styles.select}
                >
                  {resolutions.map((resolution) => (
                    <MenuItem
                      key={resolution}
                      value={resolution}
                    >
                      {resolution}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className={styles.inline}>
              <FormControl sx={{ m: 2.5, mb: 2.5, ml: 1, mr: 1, textAlign: 'left'  }} size="small">
                <InputLabel id="network-name-label">Netzwerk</InputLabel>
                <Select
                  labelId="network-label"
                  id="network-name"
                  value={connection}
                  onChange={handleNetworkChange}
                  input={<OutlinedInput label="Connection" />}
                  MenuProps={MenuProps}
                  className={styles.select}
                >
                  {connections.map((connection) => (
                    <MenuItem
                      key={connection}
                      value={connection}
                    >
                      {connection}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ m: 2.5, mb: 2.5, ml: 1, mr: 1, textAlign: 'left'  }} size="small">
                <InputLabel id="country-name-label">Land</InputLabel>
                <Select
                  labelId="country-label"
                  id="country-name"
                  value={country}
                  onChange={handleCountryChange}
                  input={<OutlinedInput label="Land" />}
                  MenuProps={MenuProps}
                  className={styles.select}
                >
                  {countries.map((country) => (
                    <MenuItem
                      key={country}
                      value={country}
                    >
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className={styles.inline}>
              {/* <Box sx={{ m: 1.5 }} className={styles.slider}>
                <Slider
                  className={styles.slider}
                  aria-label="Dauer"
                  defaultValue={2}
                  max={24}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={0.1}
                />
              </Box> */}
              <Box sx={{ m: 1.5 }} className={styles.slider}>
                <a id="input-slider" gutterBottom className={styles.label}>
                  Dauer
                </a>
                <Grid container alignItems="center">
                  <Grid item>
                  </Grid>
                  <Grid item xs>
                    <Slider
                      className={styles.slidercolor}
                      value={typeof duration === 'number' ? duration : 0}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                      defaultValue={2}
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
          </div>
        </div>
      </Card>
    </main>
  </div>  
  )
}

