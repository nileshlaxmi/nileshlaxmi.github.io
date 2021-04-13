import React from "react";

const WorkExperience = ({ text }) => {
	const { header, description } = text;
	return (
		<div className="main__column--common">
			<div className="main__column--common--header">
				<span>{header}</span>
			</div>
			<>
				{description.map((item, index) => {
					return (
						<div className="main__column--common--desc" key={index}>
							<div className="main__column--common--desc--row">
								<div>{item.title}</div>
								<div>{item.text1}</div>
							</div>
							<div>
								<span>{item.text2}</span>
							</div>
							<div>
								<span>{item.text3}</span>
							</div>
						</div>
					);
				})}
			</>
		</div>
	);
};
export default WorkExperience;
