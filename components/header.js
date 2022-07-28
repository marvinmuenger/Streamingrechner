import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

const drawerWidth = 240;

export default function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const router = useRouter();
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Divider />
        <List>
          <ListItem component="a" href="/" disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Übersicht" />
            </ListItemButton>
          </ListItem>
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

    return (
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
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <div style={{ display: 'flex', width: 'calc(100vw*0.95)' }}>
              <Link href="/" passHref>
                <Button sx={{ color: 'black !important' }} className={router.pathname === "/" ? styles.activeLink : styles.disabledLink}>
                  Übersicht
                </Button>
              </Link>
              <Link href="/rechenzentren" passHref>
                <Button sx={{ color: 'black !important' }} className={router.pathname === "/rechenzentren" ? styles.activeLink : styles.disabledLink}>
                  Rechenzentren
                </Button>
              </Link>
              <Link href="/netzwerke" passHref>
                <Button sx={{ color: 'black !important' }} className={router.pathname === "/netzwerke" ? styles.activeLink : styles.disabledLink}>
                  Netzwerke
                </Button>
              </Link>
              <Link href="/endgeraete" passHref>
                <Button sx={{ color: 'black !important' }} className={router.pathname === "/endgeraete" ? styles.activeLink : styles.disabledLink}>
                  Endgeräte
                </Button>
              </Link>
              <Link href="/faq" passHref>
                <Button sx={{ color: 'black !important', marginLeft: 'auto' }} className={router.pathname === "/faq" ? styles.activeLink : styles.disabledLink}>
                  FAQ
                </Button>
              </Link>
            </div>
          </Box>
        </Toolbar>
      </AppBar><Box component="nav">
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
    )
}  