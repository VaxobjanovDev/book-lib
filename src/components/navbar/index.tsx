import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {MenuIcon} from "../icons/menu.icon";
import Box from "@mui/material/Box";
import {InputSearch} from "../input-search";
import {DropdownMenu} from "../dropdown";
import * as React from "react";
import {BellIcon} from "../icons";
import {Container} from "@mui/material";

const drawerWidth = 240;

interface Props {
  handleDrawerToggle: () => void
}

export const Navbar = ({handleDrawerToggle}: Props) => {

  return (
    <AppBar
      position="fixed"
      sx={{
        width: {md: `calc(100% - ${drawerWidth}px)`},
        ml: {sm: `${drawerWidth}px`},
        background:"#fff",
        padding:"5px 0"
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{mr: 2, display: {md: 'none'}}}
        >
          <MenuIcon/>
        </IconButton>
        <Container maxWidth={"xl"} sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <InputSearch/>
          <Box sx={{display: "flex", alignItems: "center", gap: "25px"}}>
            <IconButton color="secondary" size="large">
              <BellIcon/>
            </IconButton>
            <DropdownMenu/>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}