import {Grid} from "@mui/material";
import {Pagination} from "../../../../components/pagination";
import * as React from "react";
import {BookCard} from "../../../../components/card";
import {BooksData} from "../../../../types/my-data";




export const Cards = ({books}:BooksData)=>{
  const [currentPage, setCurrentPage] = React.useState(1);

  const PER_PAGE = 12;
  const offset = (currentPage - 1) * PER_PAGE;
  const lastPage = Math.ceil(books?.length / PER_PAGE);

  const currentData = books?.slice(offset, offset + PER_PAGE)?.map((item:any) => {
    return(
      <Grid key={item?.book?.id || item.isbn} item sm={4} md={4} lg={3} xl={2}>
        <BookCard book={item.book ?? item} status={item?.status} />
      </Grid>
    )});

  return(
    <>
      <Grid
        container
        sx={{ display: "flex",margin:"20px 0"}}
        spacing={2}
      >
        {currentData}
      </Grid>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        maxLength={8}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}