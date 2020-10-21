import React from 'react';
import './assets/css/style.css';
import './assets/css/magnific-popup.css';
import './assets/css/slick.css';
import './assets/css/LineIcons.css';
import './assets/css/bootstrap.min.css';
import './assets/css/default.css';
// import './assets/js/vendor/jquery-1.12.4.min.js';
// import './assets/js/vendor/modernizr-3.7.1.min.js';
// import './assets/js/popper.min.js';
// import './assets/js/bootstrap.min.js';
// import './assets/js/slick.min.js';
// import './assets/js/jquery.magnific-popup.min.js';
// import './assets/js/ajax-contact.js';
// import './assets/js/imagesloaded.pkgd.min.js';
// import './assets/js/isotope.pkgd.min.js';
// import './assets/js/jquery.easing.min.js';
// import './assets/js/scrolling-nav.js';
// import './assets/js/main.js';
import Header from './component/Header';
import Services from './component/Services';
import Portfolio from './component/Portfolio';
import Pricing from './component/Pricing';
import About from './component/About';
import Testimonial from './component/Testimonial';
import Teams from './component/Teams';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Portfolio />
      <Pricing />
      <About />
      <Testimonial />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
