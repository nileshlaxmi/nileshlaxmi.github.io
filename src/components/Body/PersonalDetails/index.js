import React from "react";

const PersonalDetails = ({ text }) => {
	const { header, description } = text;
	return (
		<div className="main__column--common personal-details">
			<div className="main__column--common--header">
				<span>{header}</span>
			</div>
			<>
				{description.map((item, index) => {
					return (
						<div className="main__column--common--desc--details" key={index}>
							<span>{item.title}</span>
							<span>{item.text1}</span>
						</div>
					);
				})}
			</>
		</div>
	);
};
export default PersonalDetails;
