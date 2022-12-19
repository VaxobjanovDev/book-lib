import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {dataLink, dataLink2} from "./data-link";
import {NavLink} from "react-router-dom";
import {Box} from "@mui/material";
import {LogoIcon} from "../icons/logo.icon";

export const DrawerCompo = () => {
  return (
    <>
      <Toolbar>
        <LogoIcon/>
      </Toolbar>
      <Box sx={{display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%"}}>
        <List>
          {dataLink.map((link) => (
            <NavLink key={link.id} to={link.path} style={{textDecoration:"none"}}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText primary={link.title}/>
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <List>
          {dataLink2.map((link) => (
            <NavLink key={link.id} to={"/"} style={{textDecoration:"none"}}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText primary={link.title}/>
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Box>
    </>
  )
}