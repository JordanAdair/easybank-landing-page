import React from "react";

const Navbar = () => {
	return (
		<div>
			<ul className="flex space-x-6 text-grayishBlue">
				<li className="border-b-4 border-b-transparent hover:border-b-limeGreen">
					<a href="#">Home</a>
				</li>
				<li className="border-b-4 border-b-transparent">
					<a href="#">About</a>
				</li>
				<li className="border-b-4 border-b-transparent">
					<a href="#">Contact</a>
				</li>
				<li className="border-b-4 border-b-transparent">
					<a href="#">Blog</a>
				</li>
				<li className="border-b-4 border-b-transparent">
					<a href="#">Careers</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
