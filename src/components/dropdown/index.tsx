import Box from "@mui/material/Box";
import {Menu, MenuItem, Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useEffect} from "react";
import {axiosInstance} from "../../base-api";
import {Myself} from "../../types/my-data";
import {UserIcon} from "../icons/user.icon";

export const DropdownMenu = ()=>{
  const [data,setData] = React.useState<Myself>();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getMyself = async () => {
    await axiosInstance.get('/myself').then(res=>{
      setData(res.data.data)
    })
  }

  useEffect(()=>{
    getMyself()
  },[])

  return(
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 2,background:"#bdbdbd" }}>
         <UserIcon/>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >

          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{data?.name}</Typography>
          </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{data?.email}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}