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
import {useContext} from "react";
import {AuthContext} from "../../store/auth-context";

export const DrawerCompo = () => {
  const {logOut} = useContext(AuthContext)

  const handleLogOut = async ()=>{
    await logOut()
  }

  return (
    <>
      <Toolbar sx={{background:"#f9f9f9"}}>
        <LogoIcon/>
      </Toolbar>
      <Box sx={{display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%",background:"#f9f9f9",}}>
        <List>
          {dataLink.map((link) => (
            <NavLink key={link.id} to={link.path} style={{textDecoration:"none"}}>
              <ListItem disablePadding sx={{color:"#727272"}}>
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
            <NavLink onClick={handleLogOut} key={link.id} to={"/"} style={{textDecoration:"none"}}>
              <ListItem disablePadding sx={{color:"#727272"}}>
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