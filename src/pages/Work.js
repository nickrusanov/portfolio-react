import { useParams } from "react-router-dom";

import BtnGitHub from "../components/BtnGitHub";
import projectList from "../helpers/projectList";

const Work = () => {
	const { id } = useParams();

	return (
		<main className="main">
			<section className="work-item">
				<div className="container">
					<div className="work-item__inner">
						<h1 className="title work-item__title">{projectList[id].title}</h1>

						<picture>
							<source media="(max-width: 480px)" srcSet={'./.' + projectList[id].previewImgWebp} type="image/webp" />
							<source media="(max-width: 480px)" srcSet={projectList[id].previewImg} />
							<source srcSet={projectList[id].projectImgWebp} type="image/webp" />
							<img className="work-item__img" src={projectList[id].projectImg} alt="work" />
						</picture>

						<p className="work-item__text">Skills: React, Node.js, MongoDB</p>

						{projectList[id].gitHubLink && <BtnGitHub link="https://github.com" />}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Work;