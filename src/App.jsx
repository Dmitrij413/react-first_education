import Navigation from './components/Navigation';
import './styles/main.css'

function App() {
  return (
    <div className="App">
      <Navigation />

	<main>
		<section className="hero">
			<div className="container">
				<h1 className="hero-title">Hi, It’s Théophile Seyrig</h1>
				<div className="hero-descr">Designer from Porto, Portugal</div>
				<a href="#" className="hero-link link">Latest works</a>
			</div>
		</section>
		<section className="about" id="about">
			<div className="container">
				<h2>About</h2>
				<p className="about-text">Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. <br/> <br/> Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. diam penatibus aliquet tellus, in rutrum augue. Pellentesque. <br/> </p>
			</div>
		</section>
		<section className="skills" id="skills">
			<div className="container">
				<h2>Skills</h2>
				<img className="avatar" src="./img/Avatar.png" alt="Avatar"/>
				<div className="skill">
					<div className="profile">
						<h3 className="skills-th">Profile</h3>
						<p className="skills-text stp">UI / UX Engineer, Front-end Developer</p>
					</div>
					<div className="ux-research">
						<h3 className="skills-th">UX Research</h3>
						<progress className="progress-ux" value="90" max="100"></progress>
					</div>
					<div className="tools__ux">
						<h3 className="skills-th">Tools</h3>
						<p className="skills-text tools-ux">Paper, Pen, Balsamiq</p>
					</div>
					<div className="ux-research">
						<h3 className="skills-th">UI Design</h3>
						<progress className="pogress-ui" value="80" max="100"></progress>
					</div>
					<div className="tools__ux">
						<h3 className="skills-th">Tools</h3>
						<p className="skills-text tools-ui">Adobe PS, AI, XD, Figma, InVision</p>
					</div>
					<div className="ux-research">
						<h3 className="skills-th">Front-end Dev</h3>
						<progress className="progress-front-end" value="65" max="100"></progress>
					</div>
					<div className="tools__ux">
						<h3 className="skills-th">Tools</h3>
						<p className="skills-text tools-front-end">HTML, CSS, JS, Bootstrap, React</p>
					</div>
				</div>
			</div>
		</section>
		<section className="portfolio" id="portfolio">
			<div className="container">
				<h2>Portfolio</h2>
				<div className="portfolio-content">
					<div className="portfolio-descr">
						<h3>UX Research</h3>
						<p className="portfolio-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac dictum nibh nam odio cursus id. Diam massa semper a tincidunt cursus ultricies lectus eget urna.</p>
					</div>
					<div className="portfolio-img">
						<img src="./img/Rectangle.png" alt=""/>
						<img src="./img/Rectangle3.png" alt=""/>
						<img src="./img/Rectangle1.png" alt=""/>
						<img src="./img/Rectangle2.png" alt=""/>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer id="footer">
		<div className="container">
			<h2>Get in Touch</h2>
			<div className="footer-content">
				<div className="footer-column">
					<ul className="footer-list list-reset">
						<li className="footer-item"><a href="https://dribbble.com/" className="footer-link" target="_blank">Dribbble</a></li>
						<li className="footer-item"><a href="https://www.behance.net/" className="footer-link" target="_blank">Behance</a></li>
						<li className="footer-item"><a href="https://codepen.io/" className="footer-link" target="_blank">CodePen</a></li>
						<li className="footer-item"><a href="https://github.com
							" className="footer-link" target="_blank">GitHub</a></li>
						<li className="footer-item"><a href="https://medium.com/" className="footer-link" target="_blank">Medium</a></li>
					</ul>
				</div>
				<div className="footer-column">
					<ul className="footer-list list-reset">
						<li className="footer-item"><a href="https://linkedin.com/" className="footer-link" target="_blank">LinkedIn</a></li>
						<li className="footer-item"><a href="https://www.facebook.com/" className="footer-link" target="_blank">Facebook</a></li>
						<li className="footer-item"><a href="https://instagram.com/" className="footer-link" target="_blank">Instagram</a></li>
						<li className="footer-item"><a href="https://twitter.com/" className="footer-link" target="_blank">Twitter</a></li>
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
    </div>
  );
}

export default App;
