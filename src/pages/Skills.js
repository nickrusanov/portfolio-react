const Skills = () => {
	return (
		<main className="main">
			<section className="skills">
				<div className="container">
					<h1 className="title skills__title">Skills</h1>

					<div className="box skills__box">
						<h2 className="subtitle skills__subtitle">Frontend</h2>
						<p className="skills__text">JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap,
							MaterialUI,
							Yarn, TailwindCSS, StyledComponents</p>
					</div>

					<div className="box skills__box">
						<h2 className="subtitle skills__subtitle">Backend</h2>
						<p className="skills__text">NodeJS, MySQL, MongoDB, PHP, Laravel</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Skills;