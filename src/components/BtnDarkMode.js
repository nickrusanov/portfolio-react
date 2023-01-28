import { useState, useEffect } from "react";

const BtnDarkMode = () => {
	const [darkMode, setDarkMode] = useState('light');

	useEffect(() => {
		darkMode === 'dark'
			? document.documentElement.classList.add('darkmode')
			: document.documentElement.classList.remove('darkmode');
	}, [darkMode])

	const toggleDarkMode = () => {
		setDarkMode((value) => value === 'light' ? 'dark' : 'light');
	}

	return (
		<button className={`header__lightmode-btn${darkMode === 'dark' ? ' header__lightmode-btn--darkmode' : ''}`} onClick={toggleDarkMode}>
			<svg className="header__lightmode-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0v-2A.5.5 0 0 1 8 0Zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13Zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5ZM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8Zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 0 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0Zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0Zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707ZM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708Z" fill="black" />
			</svg>

			<svg className="header__lightmode-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.00025 0.277334C6.09787 0.395951 6.15767 0.541116 6.17193 0.694073C6.18619 0.84703 6.15426 1.00075 6.08025 1.13537C5.50209 2.19689 5.20015 3.38676 5.20222 4.59551C5.20222 8.61668 8.48035 11.8728 12.5205 11.8728C13.0475 11.8728 13.5606 11.8178 14.0536 11.7128C14.2047 11.6801 14.3621 11.6926 14.5062 11.7488C14.6503 11.805 14.7746 11.9024 14.8636 12.0288C14.9576 12.1603 15.0055 12.3191 14.9999 12.4806C14.9943 12.6421 14.9355 12.7972 14.8326 12.9219C14.0483 13.8853 13.0588 14.6616 11.9363 15.1941C10.8139 15.7267 9.58672 16.002 8.34435 16C3.73416 16 0 12.2858 0 7.70964C0 4.2655 2.11409 1.31138 5.12421 0.0593244C5.27416 -0.00404638 5.44062 -0.0170529 5.59858 0.0222585C5.75655 0.06157 5.8975 0.151077 6.00025 0.277334V0.277334Z" fill="black" />
				<path d="M10.7939 3.14746C10.8083 3.10415 10.8359 3.06646 10.8729 3.03975C10.9099 3.01304 10.9543 2.99866 10.9999 2.99866C11.0456 2.99866 11.09 3.01304 11.127 3.03975C11.164 3.06646 11.1916 3.10415 11.2059 3.14746L11.593 4.30951C11.766 4.82753 12.172 5.23355 12.69 5.40655L13.8521 5.79357C13.8954 5.80791 13.933 5.83553 13.9598 5.87252C13.9865 5.9095 14.0008 5.95396 14.0008 5.99958C14.0008 6.0452 13.9865 6.08966 13.9598 6.12664C13.933 6.16362 13.8954 6.19125 13.8521 6.20559L12.69 6.5926C12.4345 6.67772 12.2024 6.82118 12.012 7.01159C11.8215 7.20201 11.6781 7.43416 11.593 7.68965L11.2059 8.8517C11.1916 8.895 11.164 8.93269 11.127 8.9594C11.09 8.98611 11.0456 9.00049 10.9999 9.00049C10.9543 9.00049 10.9099 8.98611 10.8729 8.9594C10.8359 8.93269 10.8083 8.895 10.7939 8.8517L10.4069 7.68965C10.3218 7.43416 10.1783 7.20201 9.98792 7.01159C9.7975 6.82118 9.56535 6.67772 9.30987 6.5926L8.14782 6.20559C8.10451 6.19125 8.06682 6.16362 8.04011 6.12664C8.0134 6.08966 7.99902 6.0452 7.99902 5.99958C7.99902 5.95396 8.0134 5.9095 8.04011 5.87252C8.06682 5.83553 8.10451 5.80791 8.14782 5.79357L9.30987 5.40655C9.56535 5.32143 9.7975 5.17798 9.98792 4.98756C10.1783 4.79714 10.3218 4.56499 10.4069 4.30951L10.7939 3.14746V3.14746ZM13.8631 0.0983307C13.8729 0.0698558 13.8914 0.0451644 13.916 0.0276893C13.9405 0.0102143 13.9699 0.000823975 14.0001 0.000823975C14.0302 0.000823975 14.0596 0.0102143 14.0841 0.0276893C14.1087 0.0451644 14.1272 0.0698558 14.1371 0.0983307L14.3951 0.872363C14.5101 1.21838 14.7811 1.48939 15.1271 1.60439L15.9011 1.8624C15.9296 1.87228 15.9543 1.89078 15.9718 1.91533C15.9893 1.93988 15.9986 1.96927 15.9986 1.99941C15.9986 2.02955 15.9893 2.05894 15.9718 2.08349C15.9543 2.10804 15.9296 2.12654 15.9011 2.13642L15.1271 2.39443C14.9566 2.45115 14.8016 2.54685 14.6746 2.67392C14.5475 2.80099 14.4518 2.95594 14.3951 3.12646L14.1371 3.90049C14.1272 3.92896 14.1087 3.95366 14.0841 3.97113C14.0596 3.98861 14.0302 3.998 14.0001 3.998C13.9699 3.998 13.9405 3.98861 13.916 3.97113C13.8914 3.95366 13.8729 3.92896 13.8631 3.90049L13.605 3.12646C13.5483 2.95594 13.4526 2.80099 13.3256 2.67392C13.1985 2.54685 13.0435 2.45115 12.873 2.39443L12.099 2.13642C12.0705 2.12654 12.0458 2.10804 12.0283 2.08349C12.0109 2.05894 12.0015 2.02955 12.0015 1.99941C12.0015 1.96927 12.0109 1.93988 12.0283 1.91533C12.0458 1.89078 12.0705 1.87228 12.099 1.8624L12.873 1.60439C13.219 1.48939 13.49 1.21838 13.605 0.872363L13.8631 0.0993307V0.0983307Z" fill="black" />
			</svg>
		</button>
	);
}

export default BtnDarkMode;