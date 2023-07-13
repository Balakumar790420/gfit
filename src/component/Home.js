import React from 'react';
import './Home.css';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://images3.alphacoders.com/652/652257.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Text>
        <h1 style={{color:'#afadad', marginTop: '10rem', marginLeft: '0', fontSize: '5rem', fontWeight: 'bolder'}}>How you look !<br></br>
            How You feel !<br></br>
             Starts with <span style={{fontSize: '5rem', fontWeight: 'bolder'}}>What You Eat !</span>
            </h1>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Home;
