'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { navigationitems, advancedNavigationItems } from '@/lib/constants';

import {
  Box,
  CssBaseline,
  AppBar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import Content from './Content';

export default function Curriculum() {
  const [pageState, setPageState] = useState<string>('Overview');
  const drawerWidth: number = 240;
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
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop: '55px',
          },
        }}
        variant="permanent"
        anchor="left"
      >
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
      <Box component="main" sx={MainStyle}>
        <Content pageState={pageState} />
      </Box>
    </Box>
  );
}

const listItemFont = { fontSize: '12px' };

const LogoutContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const MainStyle = {
  flexGrow: 1,
  bgcolor: 'background.default',
  p: 3,
  marginTop: '55px',
  backgroundColor: '#f1f2f5',
};
