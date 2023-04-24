const Navigation = () => {
	return ( 
		<header id="header">
        <div className="container">
          <div className="navigation">
            <div className="logo">Portofolio</div>
            <ul id="menu" className="list-reset">
              <li className="menu-li"><a className="menu-a menu-home" href="#">Home</a></li>
              <li className="menu-li"><a className="menu-a" href="#about">About</a></li>
              <li className="menu-li"><a className="menu-a" href="#skills">Skills</a></li>
              <li className="menu-li"><a className="menu-a" href="#portfolio">Portfolio</a></li>
              <li className="menu-li"><a className="menu-a" href="#footer">Contact</a></li>
            </ul>
          </div>
        </div>
	    </header>
	 );
}
 
export default Navigation;