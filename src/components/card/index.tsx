import React, {useContext, useEffect} from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia, Skeleton,
  Typography,
} from "@mui/material";
import { cardStyle, styleHover } from "./styles";
import { BookProps } from "../../types/my-data";
import BasicModal from "../../modules/home/components/edit/modal";
import {Buttons} from "./buttons";
import {StoreContext} from "../../store/store";

interface BookCardProps {
  book: BookProps;
  status?: number;
}

export const BookCard = ({ book, status }: BookCardProps) => {
  const [open, setOpen] = React.useState(false);
  const {getAllBooks} = useContext(StoreContext)
  const handleOpen = () => setOpen(true);
  const handleClose = ()=>setOpen(false)

  useEffect(()=>{
    if(!open){
      getAllBooks("/books")
    }
  },[open])

  return (
    <Card sx={cardStyle}>
      <CardActionArea>
        {book.cover?(<CardMedia
          loading={"lazy"}
          component="img"
          height="300"
          width={"200"}
          image={book.cover}
          alt="Card image"
          sx={{ objectFit: "fill" }}
        />):<Skeleton variant="rectangular" width={210} height={118} />}

        <CardContent sx={styleHover} className={"card-content"}>
          <Typography variant="h6" color="text.secondary">
            <span>Book Author</span>: {book.author}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <span>Pages</span>: {book.pages}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <span>Published Date:</span>
            {book.published}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Buttons status={status} handleOpen={handleOpen} id={book?.id}/>
      <BasicModal
        data={book}
        status={status}
        title={"Edit book ISBN"}
        open={open}
        setOpen={setOpen}
      />
    </Card>
  );
};
