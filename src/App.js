import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import Login from "./Pages/Login";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";


const App = () => {
  const {isAuthenticated} = useAuth0()
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            path='/login'
            element={isAuthenticated ? <Navigate to='/' /> : <Login />}
          />
          <Route
            path='/post/:id'
            element={isAuthenticated ? <Post /> : <Login />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
