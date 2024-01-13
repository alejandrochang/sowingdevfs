'use client';

import { useState } from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { navigationitems, advancedNavigationItems } from '@/lib/constants';

import SowingDevLogo from '../img/sowingDevWhite.png';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import Content from './Content';

const drawerWidth = 240;

export default function Curriculum() {
  const [pageState, setPageState] = useState<string>('Overview');

  const handleNavChange = (e: any) => {
    setPageState(e.target.innerText);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: '#202021',
        }}
      >
        <Toolbar>
          <div style={ContainerStyle}>
            <Typography variant="h6" noWrap component="div">
              {pageState}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          <a href="/">
            <Image
              className="logo"
              src={SowingDevLogo}
              width={100}
              height={100}
              alt="Sowing Dev Logo"
              style={{ borderRadius: '5px' }}
            />
          </a>
        </Toolbar>
        <Divider />
        <List sx={{ padding: '8px 20px 8px 20px' }}>
          {navigationitems.map(({ text }, index) => (
            <ListItem key={text} disablePadding onClick={handleNavChange}>
              <ListItemButton>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={listItemFont}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {advancedNavigationItems.map((text, index) => (
            <ListItem key={text} disablePadding disabled>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={listItemFont}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <div style={LogoutContainer}>
          <ListItemButton
            style={{ position: 'absolute', bottom: '40px' }}
            onClick={() => signOut()}
          >
            <ListItemText
              primary="Logout"
              primaryTypographyProps={listItemFont}
            />
          </ListItemButton>
        </div>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Content pageState={pageState} />
      </Box>
    </Box>
  );
}

const ContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
};

const listItemFont = { fontSize: '12px' };

const LogoutContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
