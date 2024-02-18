import './App.css';
import './Home.css';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import home1 from './assets/sliders/home-1.jpg';
import home2 from './assets/sliders/home-2.jpg';

import feature1 from './assets/feature1.jpg';
import feature2 from './assets/feature2.jpg';


function Home() {
  const api = async() => {
    fetch("http://localhost:8080/product/all", {method: 'GET'})
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <Header />
      <div className='content-grid'>
        
        <Carousel
         className='full-width'
         autoPlay 
         infiniteLoop 
         interval={3000} 
         showArrows={false} 
         showStatus={false} 
         showThumbs={false}
        >
          <div>
            <img src={home1} alt="home-1" />
          </div>
          <div>
            <img src={home2} alt="home-2" />
          </div>
        </Carousel>
        <Introduction />
        <FeaturedProducts />
        <Offer />
        <Footer />
      </div>
    </>
  );
}

function Introduction() {
  return(
    <>
      <div className='introduction'>
        <p>
          Intoducing Privvy owned by TWO DOT's Lifestyle, a carefully curated line of skincare products crafted with a commitment to ethical and sustainable beauty practices, and designed to elevate your daily skincare regimen.
        </p>
        <p>
          Privvy Face Wash delivers a gentle yet effective cleansing experience to rejuvenate and nourish all skin types. Unclogging pores and effectively removing impurities and residues, it preserves the skin's natural oils and moisture, leaving a long-lasting, refreshed, and revitalised sensation.
        </p>
        <p>
          Indulge in a truly sensory skincare journey that cleanses, brightens, and leaves the skin feeling fresh, supple, and invigorated. A delightfully subtle fragrance adds to its overall allure.
        </p>
          <br />
            <h1>Product Highlights:</h1>
          <h2>Ingredients Fusion</h2>
        <p>
          The ingredients are carefully selected for their skin-nourishhing properties, ensuring a wholesome skincare experience.
        </p>
          <h2>Gentle and Effective Cleansing</h2>
        <p>
          Balancing gentle cleansing with effectiveness, our Face Wash range unclogs pores and removes impurities, leaving your skin feeling refreshed and renewed.
        </p>
          <h2>Cruelty-free and Eco-friendly</h2>
        <p>
          Committed to ethical practices, Privy Face Wash is cruelty-free aligning with our dedication to a better, eco-friendly world.
        </p>
          <h2>Enriched Sensory Experience</h2>
        <p>
          Elevate your skincare routine with a multi-sensory journey, providing both tangible and olfactory satisfaction, leaving your skin enriched and your senses awakened.
        </p>
      </div>
    </>
  );
}

function FeaturedProducts() {
  return(
    <>
      <div className='feature'>
        <Feature 
          image={feature1}
          title='Coffee Nut Face Wash'
          description='Experience the invigorating blend of coffee and nuts, meticulously combined to retain skin vitality and minimise signs of aging.'
        />
        <Feature
          image={feature2}
          title='Mix Berry Face Wash'
          description='Immerse your skin in a potent blend of antioxidant-rich berries, providing the rejuvenation your skin deserves.'
        />
      </div>
    </>
  )
}

function Feature(props){

  return(
    <div className='features'>
          <img src={props.image} alt="feature1" />
            <h3>{props.title}</h3>
          <p>
            {props.description}
          </p>
          <a href='catalouge'>
            BUY NOW
          </a>
        </div>
  );
}

// function Testimonials() {
  
// }

function Offer() {
  return(
    <>
      <div className='offer full-width'>
        <h1>OFFER</h1>
        <h2>Buy 1 - Get 1</h2>
        <p>
          On all products
        </p>
        <a href='catalouge'>
          BUY NOW
        </a>
      </div>
    </>
  );
}

export default Home;
