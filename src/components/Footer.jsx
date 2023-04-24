const Footer = () => {
	return ( 
		<footer id="footer">
		<div className="container">
			<h2>Get in Touch</h2>
			<div className="footer-content">
				<div className="footer-column">
					<ul className="footer-list list-reset">
						<li className="footer-item"><a href="https://dribbble.com/" className="footer-link" target="_blank" rel="noreferrer">Dribbble</a></li>
						<li className="footer-item"><a href="https://www.behance.net/" className="footer-link" target="_blank" rel="noreferrer">Behance</a></li>
						<li className="footer-item"><a href="https://codepen.io/" className="footer-link" target="_blank" rel="noreferrer">CodePen</a></li>
						<li className="footer-item"><a href="https://github.com" className="footer-link" target="_blank" rel="noreferrer">GitHub</a></li>
						<li className="footer-item"><a href="https://medium.com/" className="footer-link" target="_blank" rel="noreferrer">Medium</a></li>
					</ul>
				</div>
				<div className="footer-column">
					<ul className="footer-list list-reset">
						<li className="footer-item"><a href="https://linkedin.com/" className="footer-link" target="_blank" rel="noreferrer">LinkedIn</a></li>
						<li className="footer-item"><a href="https://www.facebook.com/" className="footer-link" target="_blank" rel="noreferrer">Facebook</a></li>
						<li className="footer-item"><a href="https://instagram.com/" className="footer-link" target="_blank" rel="noreferrer">Instagram</a></li>
						<li className="footer-item"><a href="https://twitter.com/" className="footer-link" target="_blank" rel="noreferrer">Twitter</a></li>
					</ul>
				</div>
				<div className="footer-column">
					<ul className="footer-list list-reset">
						<li className="footer-item"><a href="mailto:seyrig@mailme.com" className="footer-link">seyrig@mailme.com</a></li>
						<li className="footer-item"><a href="tel:+556645665544" className="footer-link">+ 55 6645 665544</a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	 );
}
 
export default Footer;