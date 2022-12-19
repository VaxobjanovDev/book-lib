import {Box, Button, IconButton} from "@mui/material";
import {buttonStyles, statusButton} from "./styles";
import {EditIcon} from "../icons/edit.icon";
import {DeleteIcon} from "../icons";
import React, {useContext} from "react";
import {StoreContext} from "../../store/store";

interface Props {
  id: number,
  status?: number,
  handleOpen: () => void,
}

export const Buttons = ({status, handleOpen, id}: Props) => {
  const {deleteBook} = useContext(StoreContext);

  const handleDelete = async () => {
    deleteBook("/books/",id)
  };

  return (
    <>
      {typeof status === "number" && (
        <>
          <Button
            className={"status-button"}
            sx={statusButton}
            color={status === 0 ? "warning" : status === 1 ? "primary" : "error"}
            variant={"contained"}
          >
            {status=== 0 ? "New" : status === 1 ? "Reading" : "Finished"}
          </Button>
          <Box sx={buttonStyles} className={"button-box"}>
            <IconButton
              onClick={handleOpen}
              size={"small"}
              color={"warning"}
              sx={{background: "#F07427", color:"#fff"}}
            >
              <EditIcon/>
            </IconButton>
            <IconButton
              onClick={handleDelete}
              size={"small"}
              color={"error"}
              sx={{background: "#D32F2F",color:"#fff"}}
            >
              <DeleteIcon/>
            </IconButton>
          </Box>
        </>
      )}
    </>
  )
}