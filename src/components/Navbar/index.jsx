import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
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
				</NavMenu>
			</Nav>
	);
};

export default Navbar;
