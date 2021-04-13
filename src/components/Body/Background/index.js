import React from "react";

const Background = ({ text }) => {
	const { header, description } = text;
	return (
		<div className="main__column--common background">
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
							<div className="main__column--common--desc--row2">
								<span>{item.text2}</span>
							</div>
							{item.text3 && (
								<div className="main__column--common--desc--row2">
									<span>{item.text3}</span>
								</div>
							)}
							{item.text4 && (
								<div className="main__column--common--desc--row2">
									<span>{item.text4}</span>
								</div>
							)}
						</div>
					);
				})}
			</>
		</div>
	);
};
export default Background;
