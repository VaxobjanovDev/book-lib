import React, {createContext, useState} from "react";
import {axiosInstance} from "../base-api";
import {BookProps} from "../types/my-data";

interface ContextProviderType {
  books: BookProps[];
  getBooks: any;
  getAllBooks: any,
  deleteBook: any
}

const initialState: ContextProviderType = {
  books: [],
  getBooks: null,
  getAllBooks: null,
  deleteBook: null
};

export const StoreContext = createContext<ContextProviderType>(initialState);

interface ChildrenInterface {
  readonly children: React.ReactNode;
}

export const StoreContextProvider = ({children}: ChildrenInterface) => {
  const [state, setState] = useState<typeof initialState>(initialState)

  const getAllBooks = async (url: string) => {
    await axiosInstance.get(url).then((res) => {
      if (res.data?.data != null) {
        setState({
          ...state,
          books: res.data.data,
        });
      }
    });
  };

  const getBooks = async (url: string, title: string) => {
    await axiosInstance.get(url + title).then(res => {
      if (res.data !== null) {
        setState({...state, books: res.data.data})
      }
    })
  }

  const deleteBook = async (url: string, id: number) => {
    await axiosInstance.delete(url + id).then((res) => {
      setState({
        ...state,
        books: state.books.filter((book: any) => book.book.id !== id),
      });

    });
  };

  let context = {
    books: state.books,
    getBooks,
    getAllBooks,
    deleteBook
  }
  return (
    <StoreContext.Provider
      value={context}
    >
      {children}
    </StoreContext.Provider>
  );
}

