import React from "react";
import "./style.scss";
import Ganesh_Logo from "../../resources/images/bg4.png";

const Header = ({ header }) => {
	const { title } = header;
	return (
		<div className="header">
			<img src={Ganesh_Logo} alt="logo" />
			<span>{title}</span>
		</div>
	);
};

export default Header;
