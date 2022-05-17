import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Info from '../public/info.svg';
import styles from '../styles/Home.module.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Info onClick={handleOpen} style={{overflow: 'visible', float: 'right', marginTop: '-1.2rem', marginRight: '0.3rem', marginBottom: '1rem', width: '20px', color: 'rgba(0, 0, 0, 0.75)'}} className={styles.info} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Berechnung des Energieverbrauchs
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Der Energieverbrauch eines Videostreams ist von mehreren Faktoren, wie dem Endgerät, der Videoauflösung und der Netzwerkverbindung, abhängig.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
