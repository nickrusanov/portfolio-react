import { NavLink } from "react-router-dom";

const Project = (props) => {
	return (
		<li className="portfolio__item">
			<NavLink to={`./work/` + props.index} className="portfolio__item-link">
				<picture>
					<source srcSet={props.previewImgWebp} type="image/webp" />
					<img className="portfolio__item-img" src={props.previewImg} alt={props.title} />
				</picture>

				<h2 className="portfolio__item-title">{props.title}</h2>
			</NavLink>
		</li>
	);
}

export default Project;