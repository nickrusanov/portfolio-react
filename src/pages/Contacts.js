const Contacts = () => {
	return (
		<main className="main">
			<section className="contacts">
				<div className="container">
					<h1 className="title contacts__title">Contacts</h1>

					<div className="box contacts__box">
						<h2 className="subtitle contacts__subtitle">Location</h2>
						<p className="contacts__text">Moscow, Russia</p>
					</div>

					<div className="box contacts__box">
						<h2 className="subtitle contacts__subtitle">Telegram / WhatsApp</h2>
						<p className="contacts__text">+7 (905) 123-45-67</p>
					</div>

					<div className="box contacts__box">
						<h2 className="subtitle contacts__subtitle">Email</h2>
						<a className="contacts__link" href="mailto:webdev@protonmail.com">webdev@protonmail.com</a>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Contacts;