import './styles/main.css'

function App() {
  return (
    <div className="App">
      <header id="header">
		<div class="container">
			<div class="navigation">
				<div class="logo">Portofolio</div>
				<ul id="menu" class="list-reset">
					<li class="menu-li"><a class="menu-a menu-home" href="#">Home</a></li>
					<li class="menu-li"><a class="menu-a" href="#about">About</a></li>
					<li class="menu-li"><a class="menu-a" href="#skills">Skills</a></li>
					<li class="menu-li"><a class="menu-a" href="#portfolio">Portfolio</a></li>
					<li class="menu-li"><a class="menu-a" href="#footer">Contact</a></li>
				</ul>
			</div>
		</div>
	</header>
	<main>
		<section class="hero">
			<div class="container">
				<h1 class="hero-title">Hi, It’s Théophile Seyrig</h1>
				<div class="hero-descr">Designer from Porto, Portugal</div>
				<a href="#" class="hero-link link">Latest works</a>
			</div>
		</section>
		<section class="about" id="about">
			<div class="container">
				<h2>About</h2>
				<p class="about-text">Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. <br/> <br/> Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. diam penatibus aliquet tellus, in rutrum augue. Pellentesque. <br/> </p>
			</div>
		</section>
		<section class="skills" id="skills">
			<div class="container">
				<h2>Skills</h2>
				<img class="avatar" src="./img/Avatar.png" alt="Avatar"/>
				<div class="skill">
					<div class="profile">
						<h3 class="skills-th">Profile</h3>
						<p class="skills-text stp">UI / UX Engineer, Front-end Developer</p>
					</div>
					<div class="ux-research">
						<h3 class="skills-th">UX Research</h3>
						<progress class="progress-ux" value="90" max="100"></progress>
					</div>
					<div class="tools__ux">
						<h3 class="skills-th">Tools</h3>
						<p class="skills-text tools-ux">Paper, Pen, Balsamiq</p>
					</div>
					<div class="ux-research">
						<h3 class="skills-th">UI Design</h3>
						<progress class="pogress-ui" value="80" max="100"></progress>
					</div>
					<div class="tools__ux">
						<h3 class="skills-th">Tools</h3>
						<p class="skills-text tools-ui">Adobe PS, AI, XD, Figma, InVision</p>
					</div>
					<div class="ux-research">
						<h3 class="skills-th">Front-end Dev</h3>
						<progress class="progress-front-end" value="65" max="100"></progress>
					</div>
					<div class="tools__ux">
						<h3 class="skills-th">Tools</h3>
						<p class="skills-text tools-front-end">HTML, CSS, JS, Bootstrap, React</p>
					</div>
				</div>
			</div>
		</section>
		<section class="portfolio" id="portfolio">
			<div class="container">
				<h2>Portfolio</h2>
				<div class="portfolio-content">
					<div class="portfolio-descr">
						<h3>UX Research</h3>
						<p class="portfolio-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac dictum nibh nam odio cursus id. Diam massa semper a tincidunt cursus ultricies lectus eget urna.</p>
					</div>
					<div class="portfolio-img">
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
		<div class="container">
			<h2>Get in Touch</h2>
			<div class="footer-content">
				<div class="footer-column">
					<ul class="footer-list list-reset">
						<li class="footer-item"><a href="https://dribbble.com/" class="footer-link" target="_blank">Dribbble</a></li>
						<li class="footer-item"><a href="https://www.behance.net/" class="footer-link" target="_blank">Behance</a></li>
						<li class="footer-item"><a href="https://codepen.io/" class="footer-link" target="_blank">CodePen</a></li>
						<li class="footer-item"><a href="https://github.com
							" class="footer-link" target="_blank">GitHub</a></li>
						<li class="footer-item"><a href="https://medium.com/" class="footer-link" target="_blank">Medium</a></li>
					</ul>
				</div>
				<div class="footer-column">
					<ul class="footer-list list-reset">
						<li class="footer-item"><a href="https://linkedin.com/" class="footer-link" target="_blank">LinkedIn</a></li>
						<li class="footer-item"><a href="https://www.facebook.com/" class="footer-link" target="_blank">Facebook</a></li>
						<li class="footer-item"><a href="https://instagram.com/" class="footer-link" target="_blank">Instagram</a></li>
						<li class="footer-item"><a href="https://twitter.com/" class="footer-link" target="_blank">Twitter</a></li>
					</ul>
				</div>
				<div class="footer-column">
					<ul class="footer-list list-reset">
						<li class="footer-item"><a href="mailto:seyrig@mailme.com" class="footer-link">seyrig@mailme.com</a></li>
						<li class="footer-item"><a href="tel:+556645665544" class="footer-link">+ 55 6645 665544</a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
    </div>
  );
}

export default App;
