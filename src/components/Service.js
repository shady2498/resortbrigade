import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Service extends Component {
	state = {
		service: [
			{
				icon: <FaCocktail />,
				title: "Free drinks",
				info:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molliti",
			},
			{
				icon: <FaHiking />,
				title: "Dream Hiking",
				info:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molliti",
			},
			{
				icon: <FaShuttleVan />,
				title: "Free shuttle Services",
				info:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molliti",
			},
			{
				icon: <FaBeer />,
				title: "Free late night 3am Beer",
				info:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molliti",
			},
		],
	};
	render() {
		return (
			<section className="services">
				<Title title="Services" />
				<div className="services-center">
					{this.state.service.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
