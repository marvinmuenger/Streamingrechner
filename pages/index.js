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
  '5G',
];

const resolutions = [
  'SD',
  'HD',
  'UHD 4K'
];

const countries = [
  { code: 'CH', label: 'Schweiz' },
  { code: 'DE', label: 'Deutschland' },
  { code: 'FR', label: 'Frankreich' },
  { code: 'IT', label: 'Italien' },
  { code: 'ES', label: 'Spanien' },
  { code: 'US', label: 'USA' },
  { code: 'GB', label: 'Großbritannien' },
  { code: 'AT', label: 'Österreich' },
  { code: 'BE', label: 'Belgien' },
  { code: 'DK', label: 'Dänemark' },
  { code: 'FI', label: 'Finnland' },
  { code: 'GR', label: 'Griechenland' },
  { code: 'IE', label: 'Irland' },
  { code: 'LU', label: 'Luxemburg' },
  { code: 'NL', label: 'Niederlande' },
  { code: 'NO', label: 'Norwegen' },
  { code: 'SE', label: 'Schweden' },
  { code: 'CZ', label: 'Tschechien' },
  { code: 'PL', label: 'Polen' },
  { code: 'SK', label: 'Slowakei' },
  { code: 'SI', label: 'Slowenien' },
  { code: 'HU', label: 'Ungarn' }
];

export default function Home() {
  const [deviceName, setDeviceName] = React.useState([]);
  const [connection, setConnection] = React.useState([]);
  const [resolution, setResolution] = React.useState([]);

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        Streaming Energie- und CO2-Rechner
      </h1>

      <p className={styles.description}>

        Mit diesem Rechner können Sie die Energie- und CO2-Emissionen eines Streaming-Geräts berechnen.
      </p>

      <main className={styles.main}>
        <Card className={styles.card}>
            <div className={styles.wrapper}>
            <div className={styles.inline}>
              <FormControl sx={{ m: 1, mb: 2.5, ml: 1, mr: 1, textAlign: 'left' }} size="small">
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

              <FormControl sx={{ m: 1, mb: 2.5, ml: 1, mr: 1, textAlign: 'left'  }} size="small">
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

              <p>
                
              </p>
            </div>

            <div className={styles.inline}>
              <FormControl sx={{ m: 1, mb: 2.5, ml: 1, mr: 1, textAlign: 'left'  }} size="small">
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

              <Autocomplete
                id="country-select"
                sx={{  m: 1, mb: 2.5, ml: 1, mr: 1 }} 
                size="small"
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Land"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </div>
          </div>
        </Card>
      </main>
    </div>  
  )
}

