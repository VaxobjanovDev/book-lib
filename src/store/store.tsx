import React, {createContext, useState} from "react";
import {axiosInstance} from "../base-api";
import {Book} from "../types/my-data";

interface ContextProviderType {
  books: Book[];
  getBooks: any;
  deleteBook: any,
  loading: boolean,
  addNewBook: any,
  editBook: any
}

const initialState: ContextProviderType = {
  books: [],
  getBooks: null,
  deleteBook: null,
  loading: true,
  addNewBook: null,
  editBook: null,
};

export const StoreContext = createContext<ContextProviderType>(initialState);

interface ChildrenInterface {
  readonly children: React.ReactNode;
}

export const StoreContextProvider = ({children}: ChildrenInterface) => {
  const [state, setState] = useState<typeof initialState>(initialState)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(0)

  const getBooks = async (url: string, title: string) => {
    setLoading(true)
    await axiosInstance.get(url + title).then(res => {
      if (res.data !== null) {
        setState({...state, books: res.data.data})
        setLoading(false)
      }
      setStatus(res.status)
    }).catch(e => {
      setLoading(false)
    })
  }

  const addNewBook = async (url: string, values: {}) => {
    await axiosInstance.post(url, values).then(res => {
      let book = {
        book: res.data.data,
        status: 0
      }
      setState({
        ...state,
        books: [...state.books, book],
      });
    })
  }

  const editBook = async (url: string, id: number, values: {}) => {
    await axiosInstance.patch(url + id, values).then(res => {
      setStatus(res.status)
      console.log(res.data.data)
      setState({
        ...state,
        books: [...state.books.filter((book: any) => book.book.id !== id), res.data.data],
      });
    })
  }

  const deleteBook = async (url: string, id: number) => {
    await axiosInstance.delete(url + id).then((res) => {
      setState({
        ...state,
        books: state.books.filter((book: any) => book.book.id !== id),
      });
      setStatus(res.status)
      setLoading(false)
    });
  };

  let context = {
    books: state.books,
    getBooks,
    deleteBook,
    loading,
    status,
    editBook,
    addNewBook,
  }
  return (
    <StoreContext.Provider
      value={context}
    >
      {children}
    </StoreContext.Provider>
  );
}

