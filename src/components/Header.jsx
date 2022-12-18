import React from "react";
import Navbar from "./Navbar";
import RequestInviteButton from "./RequestInviteButton";

const Header = () => {
	return (
		<div className="flex my-5 justify-around items-center text-base">
			<a href="#">
				<img
					className="h-fit w-fit"
					src="/images/logo.svg"
					alt="Easy Bank branding"
				/>
			</a>

			<div className="mx-5">
				<Navbar />
			</div>

			<div>
				<RequestInviteButton />
			</div>
		</div>
	);
};

export default Header;
