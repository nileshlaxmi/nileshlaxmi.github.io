import React from "react";
import "./style.scss";
import Qualification from "./Qualifications";
import WorkExperience from "./WorkExperience";
import PersonalDetails from "./PersonalDetails";
import Background from "./Background";

const Body = ({ body }) => {
	const { qualification, workExperience, personalDetails, background } = body;
	return (
		<div className="main">
			<div className="main__column">
				<Qualification text={qualification} />
				<WorkExperience text={workExperience} />
				<PersonalDetails text={personalDetails} />
			</div>
			<div className="main__column">
				<Background text={background} />
			</div>
		</div>
	);
};

export default Body;
