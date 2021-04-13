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
							{/* <span>{item.title}</span>
							<span>{item.text1}</span> */}
							<div className="main__column--common--desc--row">
								<div>{item.title}</div>
								<div>{item.text1}</div>
							</div>
							<div className="main__column--common--desc--row2">
								<span>{item.text2}</span>
							</div>
							<div className="main__column--common--desc--row2">
								<span>{item.text3}</span>
							</div>
						</div>
						
					);
				})}
			</>
		</div>
	);
};
export default PersonalDetails;
