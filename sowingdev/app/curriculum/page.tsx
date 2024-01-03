'use client';

import { useState } from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
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
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { People } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import { listItems } from './contentData';

const drawerWidth = 240;

export default function Curriculum() {
  const [pageState, setPageState] = useState<string>('Overview');
  /*
    Todos @juan.espinoza
    1. Research state handling in React - Understand how state can be used with JavaScript, HTLM, CSS (JSX)
        a. Link: https://react.dev/learn/updating-objects-in-state
    2. Add State for the SideNavigation that will allow different children to be used. Example: If I click on 
       one of these sections on the left it should be able to change the content on the right side
  */

  const navigationitems = [
    { text: 'Overview', icon: <HomeIcon /> },
    { text: 'Web Fundamentals', icon: <LanguageIcon /> },
    { text: 'HTML & CSS', icon: <HtmlIcon /> },
    { text: 'JavaScript', icon: <JavascriptIcon /> },
    { text: 'React', icon: <CodeIcon /> },
    { text: 'Servers', icon: <StorageIcon /> },
    { text: 'FE Technologies', icon: <CodeIcon /> },
  ];

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
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
              style={{ borderRadius: '5px' }}
            >
              Log Out
            </button>
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
          {navigationitems.map(({ text, icon }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: '30px' }}>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            'Algorithms',
            'Resume Review',
            'Interview Preparation',
            'Resources',
            'Intermediate HTML/CSS',
            'Intermediate React',
            'Intermediate Next.js',
            'Advanced Frontend Concepts',
          ].map((text, index) => (
            <ListItem key={text} disablePadding disabled>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography variant="h2" gutterBottom>
          Overview
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          This course contains 15 sections:
        </Typography>
        <div>
          {listItems.map(({ title }, idx) => {
            return (
              <Typography key={title} gutterBottom>{`${
                idx + 1
              }. ${title}`}</Typography>
            );
          })}
        </div>
        <br />
        <Divider />
        <br />
        <div>
          {listItems.map(({ title, content }, idx) => {
            return (
              <>
                <Typography variant="h4" key={title} gutterBottom>
                  {title}
                </Typography>
                <Typography paragraph>{content}</Typography>
              </>
            );
          })}
        </div>
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
