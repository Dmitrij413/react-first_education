import Avatar from './../img/Avatar.png'

const Skills = () => {
	return ( 
		<section className="skills" id="skills">
			<div className="container">
				<h2>Skills</h2>
				<img className="avatar" src={Avatar} alt="Avatar"/>
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
	 );
}
 
export default Skills;