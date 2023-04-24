import rectangle from './../img/Rectangle.png'
import rectangle1 from './../img/Rectangle1.png'
import rectangle2 from './../img/Rectangle2.png'
import rectangle3 from './../img/Rectangle3.png'

const Portfolio = () => {
	return ( 
		<section className="portfolio" id="portfolio">
			<div className="container">
				<h2>Portfolio</h2>
				<div className="portfolio-content">
					<div className="portfolio-descr">
						<h3>UX Research</h3>
						<p className="portfolio-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac dictum nibh nam odio cursus id. Diam massa semper a tincidunt cursus ultricies lectus eget urna.</p>
					</div>
					<div className="portfolio-img">
						<img src={rectangle} alt=""/>
						<img src={rectangle3} alt=""/>
						<img src={rectangle1} alt=""/>
						<img src={rectangle2} alt=""/>
					</div>
				</div>
			</div>
		</section>
	 );
}
 
export default Portfolio;