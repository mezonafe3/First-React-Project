import {NavBar} from './Nav.jsx'
import { Footer } from './Footer.jsx'
import { Outlet } from 'react-router-dom';


export function Layout() {
  return (
<>
  <NavBar/>
    <Outlet/>
  <Footer/>
</>
  );
}
