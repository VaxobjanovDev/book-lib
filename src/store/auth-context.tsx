import React, {createContext, useState} from "react";
import {axiosInstance} from "../base-api";

interface ContextProviderType {
  admin?:any,
  login:any,
  logOut:any,
}

const initialState:ContextProviderType = {
  admin:localStorage.getItem("key"),
  login:null,
  logOut:null
};

export const AuthContext = createContext<ContextProviderType>(initialState);

interface ChildrenInterface {
  readonly children: React.ReactNode;
}

export const AuthContextProvider = ({children}: ChildrenInterface) => {
  const [state, setState] = useState<typeof initialState>(initialState)

  const login = async (values:{})=>{
    await axiosInstance.post("/signup", values).then(
      res => {
        localStorage.setItem('key', JSON.stringify({
          key: res.data?.data?.key,
          secret: res.data?.data?.secret,
        }))
        if(res.status===200){
          setState({...state,admin:localStorage.getItem("key")})
        }
      }
    ).catch((e)=>{
      localStorage.removeItem("key")
    })
  }

  const logOut = async ()=>{
    await localStorage.removeItem("key")
  }

  let context = {
    admin:state.admin,
    login,logOut
  }

  return (
    <AuthContext.Provider
      value={context}
    >
      {children}
    </AuthContext.Provider>
  );
}

