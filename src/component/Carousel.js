import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <div className='container'><h1 style={{color:'#afadad' , fontSize: '8rem',fontFamily:'Rubik Dirt', marginBottom: '0.1rem',marginLeft: '0.1rem'}}>Our Clients</h1><br></br>
    <h1 style={{color:'#ff6969', fontSize: '2.8rem',fontFamily:'Rubik Dirt',marginBottom: '3rem',marginLeft: '0.1rem'}}>Here Our gfit family before & after Results!</h1>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://hips.hearstapps.com/hmg-prod/images/mh-5-3-transformation-1651603522.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod/images/mh-5-3-transformation-1651603522.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod/images/mh-5-3-transformation-1651603522.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod/images/mh-5-3-transformation-1651603522.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;