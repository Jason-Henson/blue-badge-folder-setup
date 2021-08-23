import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/">React Library</NavbarBrand>
                <Nav className="ml-auto" navbar></Nav>
                    <NavItem>
                        <NavLink href="https://github.com/Jason-Henson/">Github</NavLink>                        
                    </NavItem>
            </Navbar>
        </header>
    ); 
}

export default Header;