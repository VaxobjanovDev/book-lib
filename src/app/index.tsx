import {useContext} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import {AuthContext} from "../store/auth-context";

function App() {
  const {admin} = useContext(AuthContext)

  return (
    <Routes>
      {admin ? (
        <Route path="/" element={<Home/>}/>
      ) : (
        <Route path="/" element={<Navigate replace to="/login"/>}/>
      )}
      <Route path="/login">
        {!admin ? (
          <Route index element={<Login/>}/>
        ) : (
          <Route path="/login" element={<Navigate replace to="/"/>}/>
        )}
      </Route>
      {admin && (
        <Route path="/" element={<Home/>}/>
      )}
    </Routes>
  )
}

export default App