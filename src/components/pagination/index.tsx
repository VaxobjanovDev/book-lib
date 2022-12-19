import React from "react";
import { ButtonNavigation, PaginationContainer } from "./pagination.styles";
import { Button, Grid } from "@mui/material";
import { getPaginationsItems } from "../../utils/pagination.util";
import { ChevronLeft } from "../icons/chevron-left.icon";
import { ChevronRight } from "../icons/chevron-right.icon";

interface PageProps {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (prev: number) => void;
}

export const Pagination = ({
  currentPage,
  lastPage,
  setCurrentPage,
  maxLength,
}: PageProps) => {
  const demoData = getPaginationsItems(currentPage, lastPage, maxLength);

  return (
    <Grid item xs={6} sx={{display:"flex",justifyContent:"center", margin:"10px 0"}}>
      <PaginationContainer>
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <ChevronLeft />
        </Button>
        <ButtonNavigation>
          {demoData.map((item) => (
            <Button
              key={item}
              disabled={isNaN(item)}
              onClick={() => setCurrentPage(item)}
              color={item === currentPage ? "primary" : "primary"}
              variant={item === currentPage ? "contained" : "outlined"}
            >
              {!isNaN(item) ? item : "..."}
            </Button>
          ))}
        </ButtonNavigation>
        <Button
          disabled={currentPage === lastPage}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <ChevronRight />
        </Button>
      </PaginationContainer>
    </Grid>
  );
};
