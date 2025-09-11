import logo from "../../images/LogoBN.png";
import { Button, InputSpace, Nav } from "./NavbarStyled";
import "./Navbar.css";


export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace className="input-search-space">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputSpace>

        <image src={logo} alt="Logo do Breaking News" />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}


