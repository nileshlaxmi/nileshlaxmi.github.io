import React from "react";
import "./style.scss";
import Header from "../../components/Header";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import { CONSTANT } from "../../constants";

const Layout = () => {
	const { header, body, footer } = CONSTANT;
	return (
		<div className="layout">
			<Header header={header} />
			<Body body={body} />
			{/* <Footer footer={footer} /> */}
		</div>
	);
};

export default Layout;
