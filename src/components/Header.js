import { NavLink } from 'react-router-dom';
import BtnDarkMode from './BtnDarkMode';

const Header = () => {
	const linkClass = 'header__nav-link';
	const linkClassActive = ' header__nav-link--active'

	return (<header className="header">
		<div className="container">
			<div className="header__inner">
				<NavLink to='/' className="header__logo">
					<span className="header__logo--bold">Freelancer</span> portfolio
				</NavLink>

				<BtnDarkMode />

				<nav className="header__nav">
					<ul className="header__nav-list">
						<li className="header__nav-item">
							<NavLink to='/' className={({ isActive }) => linkClass + (isActive ? linkClassActive : '')}>
								Projects
							</NavLink>
						</li>

						<li className="header__nav-item">
							<NavLink to='/skills' className={({ isActive }) => linkClass + (isActive ? linkClassActive : '')}>
								Skills
							</NavLink>
						</li>

						<li className="header__nav-item">
							<NavLink to='/contacts' className={({ isActive }) => linkClass + (isActive ? linkClassActive : '')}>
								Contacts
							</NavLink>
						</li>

					</ul>
				</nav>

			</div>
		</div>
	</header>
	);
}

export default Header;