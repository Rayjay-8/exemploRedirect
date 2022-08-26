import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
   Routes,
   Route,
   useNavigate,
   Link,
   Outlet,
   Navigate,
   useLocation,
} from "react-router-dom";
import TESTE from "./TESTE";

// Paginas
const Home = () => {
   return (
      <>
         <div className="needlogin">
            <Link to="/protect">protect</Link>
            <br></br>
            <Link to="/produto/345">produto 345</Link>
            <br></br>
         </div>
         <h2>HOME - publica</h2>
      </>
   );
};

const Protegida = () => {
   return (
      <>
         <div className="needlogin">
            <Link to="/protect">protect</Link>
            <br></br>
            <Link to="/produto/345">produto 345</Link>
            <br></br>
         </div>
         <h2>(Protegida)</h2>
      </>
   );
};
const Produto = () => {
   return (
      <>
         <div className="needlogin">
            <Link to="/protect">protect</Link>
            <br></br>
            <Link to="/produto/345">produto 345</Link>
            <br></br>
         </div>
         <img src="https://media1.giphy.com/media/KiIs2OffuvWjVib8MK/giphy.gif?cid=ecf05e479adc13e46ace6b999e47d5deee6e3a27df18bfbc&rid=giphy.gif&ct=g"></img>
      </>
   );
};

const Login = ({ logado, toggle }) => {
   const navigate = useNavigate();
   const location = useLocation();

   console.log(location, "location");

   const fazlogin = () => {
      toggle();
      if (location.state?.from) {
         navigate(location.state.from);
      } else {
         navigate("/");
      }
   };
   return (
      <>
         {!logado && (
            <h2>
               Parece que voce n'ao esta logado ainda, logue para continuar!
            </h2>
         )}
         {logado ? (
            <button onClick={toggle}>Deslogar</button>
         ) : (
            <button onClick={fazlogin}>Logar</button>
         )}
      </>
   );
};

let isAuth = false;
// Rotas protegida
const ProtectedRoutes = () => {
   const location = useLocation();
   return isAuth ? (
      <Outlet />
   ) : (
      <Navigate to="/login" replace state={{ from: location }} />
   );
};

function App() {
   const [logado, setLogado] = useState(isAuth);

   const toggle = () => {
      isAuth = !isAuth;
      setLogado((prev) => !prev);
   };

   return (
      <div className="App">
         {/* <h1>Links</h1> */}
         {/* <p>Usuario: {logado ? "Ray" : "Anonimmo"}</p> */}

         <div className="links">
            {/* <Link to="/" >HOME</Link><br></br>
        <Link to="/login" >Login</Link><br></br> */}
            {/* <div className='needlogin'>
          <Link to="/protect" >protect</Link><br></br>
          <Link to="/produto/345" >produto 345</Link><br></br>
        </div> */}
         </div>

         <Routes>
            <Route path="/" element={<TESTE />} />

            <Route element={<ProtectedRoutes />}>
               <Route path="/protect" element={<Protegida />} />
               <Route path="/produto" element={<Produto />}>
                  <Route path=":id" element={<Produto />}></Route>
               </Route>
            </Route>

            <Route
               path="/*"
               element={<Login logado={logado} toggle={toggle} />}
            />
         </Routes>

         {/* <button>Logar</button>
      <button>Sair</button> */}
      </div>
   );
}

export default App;
