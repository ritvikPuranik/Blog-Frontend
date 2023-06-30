import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	let navigate = useNavigate(); 
	let logoutAction = ()=>{
		localStorage.clear();
		let path = `/`; 
		navigate(path);
		window.location.reload();
	}

	return (
			<Nav className="custom-navbar" >
				<NavMenu >
					<NavLink to="/" activeStyle>
						Feed
					</NavLink>
					<NavLink to="/myPosts" activeStyle>
						My Articles
					</NavLink>
					<NavLink to="/compose" activeStyle>
						Compose
					</NavLink>
					<NavLink onClick={logoutAction} style={{"border":"3px dashed red", "backgroundColor":"red", "color":"white"}}>
						Logout
					</NavLink>
				</NavMenu>
			</Nav>
	);
};

export default Navbar;
