import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	let logoutAction = ()=>{
		localStorage.clear();
		window.location.reload();
	}

	return (
			<Nav>
				<NavMenu>
					<NavLink to="/" activeStyle>
						My Blogs
					</NavLink>
					<NavLink to="/compose" activeStyle>
						Compose
					</NavLink>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink onClick={logoutAction} activeStyle>
						Logout
					</NavLink>
				</NavMenu>
			</Nav>
	);
};

export default Navbar;
