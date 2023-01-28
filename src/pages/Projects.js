import Project from "../components/Project";
import projectList from "../helpers/projectList";

const Projects = () => {
	return (
		<main className="main">
			<div className="greetings projects__greetings">
				<div className="container">
					<div className="greetings__content">
						<p className="greetings__text greetings__text--big">
							Hi, my name is <span className="greetings__text--accent">Yuri</span>
						</p>
						<p className="greetings__text greetings__text--medium">a frontend developer</p>
						<p className="greetings__text greetings__text--small">with passion for learning and creating.</p>
						<button className="greetings__btn" type="button">Download CV</button>
					</div>
				</div>
			</div>

			<section className="portfolio projects__portfolio">
				<div className="container">
					<h1 className="title portfolio__title">Projects</h1>

					<ul className="portfolio__list">
						{
							projectList.map((project, index) =>
								<Project
									key={index}
									title={project.title}
									previewImg={project.previewImg}
									previewImgWebp={project.previewImgWebp}
									index={index} />)
						}
					</ul>
				</div>
			</section>
		</main>
	);
}

export default Projects;