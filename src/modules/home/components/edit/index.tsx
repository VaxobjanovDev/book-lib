import {useContext} from "react";
import {Field, Form, Formik} from "formik";
import {Button, Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {StoreContext} from "../../../../store/store";

interface Props {
  status?: number;
  data?: any;
  handleClose: () => void
}

export const EditBook = ({data, status, handleClose}: Props) => {

  const {editBook,addNewBook} = useContext(StoreContext)

  const handleSubmit = (values:{})=>{
    addNewBook("/books",values)
    handleClose()
  }

  const handleEdit = (values:{})=>{
    editBook("/books/",data.id,values)
    handleClose()
  }

  let type = typeof (status) === "number"

  return (
    <Formik initialValues={{status} || {isbn: ""}} onSubmit={typeof (status) === "number" ? handleEdit : handleSubmit}>
        <Form>
          <Grid container sx={{display: "flex", justifyContent: "center"}} spacing={2}>
            <Grid item xs={12} sm={6} md={12}>
              <Field type={type ? "number" : "text"}
                     name={type ? "status" : "isbn"} placeholder={type ? "1" : "9781118464465"}
                     as={TextField} label={type ? "status" : "isbn"} fullWidth/>
            </Grid>
          </Grid>
          <Box
            display="flex"
            justifyContent="flex-end"
          >
            <Button sx={{marginTop: "10px"}} type={"submit"} variant={"contained"} color={"primary"}>
              {data ? "Save" : "Create"}
            </Button>
          </Box>
        </Form>
    </Formik>
  )
}