import {Box, Button, CircularProgress, Container, Typography} from "@mui/material";
import * as React from "react";
import BasicModal from "./components/edit/modal";
import {Cards} from "./components/cards";
import {StoreContext} from "../../store/store";

export const HomeModule = () => {
  const [open, setOpen] = React.useState(false);
  const {books, loading} = React.useContext(StoreContext)
  // console.log(books.length)
  return (
    <Container maxWidth={"xl"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "16px 0",
        }}
      >
        <Typography variant={"h4"}>All books</Typography>
        <Button onClick={() => setOpen(true)} size={"medium"} variant={"contained"}>
          + Add
        </Button>
      </Box>

      {loading ? <Box sx={{position: "absolute", top: "50%", left: "50%"}}>
          <CircularProgress/>
        </Box>
        : (
          <>
            {books === null && <h1>No data</h1>}
            {books?.length > 0 ? <Cards books={books}/> : books?.length > 0 && <Cards books={books}/>}
          </>
        )
      }
      <BasicModal title={"Add new book"} open={open} setOpen={setOpen}/>
    </Container>
  );
};
