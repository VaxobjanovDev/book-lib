import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { EditBook } from ".";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  width: "700px",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 768px)": {
    width: "90%",
  },
};

interface PropsModal {
  status?: number;
  data?: any;
  readonly title: string;
  readonly open: boolean;
  setOpen: (open: boolean) => void;
}

export default function BasicModal({
  data,
  status,
  open,
  setOpen,
  title,
}: PropsModal) {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backdropFilter: " blur(10px)",
          backgroundColor: "rgba(0,0,0,.812)",
          boxShadow: "0 5px 15px hsl(0deg 0% 5% / 87%)",
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Box sx={{ margin: "10px 0" }}>
            <EditBook handleClose={handleClose} status={status} data={data} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
