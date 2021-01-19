import React from "react";

const Qualification = ({ text }) => {
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
								<span>{item.title}</span>
								<span>{item.text1}</span>
							</div>
							<div>
								<span>{item.text2}</span>
							</div>
						</div>
					);
				})}
			</>
		</div>
	);
};
export default Qualification;
