export interface Myself {
  name:string,
  email:string,
  key:string,
  secret:string,
}

export interface BookProps{
  author:string
  cover:string
  id:number
  isbn:string,
  pages:number,
  published:number,
  title:string
}

export interface BooksData{
  books:BookProps[]
}