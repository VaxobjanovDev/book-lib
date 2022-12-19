import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import {DrawerCompo} from "../components/drawer";
import {Navbar} from "../components/navbar";

const drawerWidth = 240;

interface PropsTypes {
  window?: () => Window;
  children: React.ReactNode
}

export const BaseLayout = ({window, children}: PropsTypes) => {

  const container = window !== undefined ? () => window().document.body : undefined;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <Navbar handleDrawerToggle={handleDrawerToggle}/>
      <Box
        component="nav"
        sx={{width: {md: drawerWidth}, flexShrink: {sm: 0,}}}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: {xs: 'block',},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          <DrawerCompo/>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: {xs:"none",sm: 'none', md: 'block'},background:"#271D1B",
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
          open
        >
          <DrawerCompo/>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{flexGrow: 1, p: 3, width: {md: `calc(100% - ${drawerWidth}px)`},position:"relative",minHeight:"97vh"}}
      >
        <Toolbar/>
        {children}
      </Box>
    </Box>
  )
}
