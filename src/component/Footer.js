import Card from 'react-bootstrap/Card';
import { AiFillFacebook } from 'react-icons/ai';
import { ImInstagram } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';


function ImgOverlayExample() {
  return (
    <div style={{ margin: '0', padding: '0' }} >
      <Card className="bg-dark text-white">

        <Card.Img src="https://cdn.wallpapersafari.com/71/0/KUmtY1.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title> <h1 style={{ color: '#ff6969', fontSize: '8rem', marginTop: '20%', marginLeft: '6.5%' }}> Get in Touch Today! </h1></Card.Title>
        </Card.ImgOverlay>
      </Card>


      <Card style={{ backgroundColor: '#ff6969',background: 'cover', width: '100%', height: '38rem', margin: '0', padding: '0' }}>
        <Card.ImgOverlay>
          <div id='contact'>
          <h3 style={{ marginLeft: '42%' }}>We Train You "gfit"</h3>
          <h4 style={{ marginTop: '2vh', fontSize: '1.5rem', marginLeft: '2%' }}>Hire a "personal trainer" kick start your fitness journey with gfit, 
         we are dedicated to helping you achieve your fitness goals. Our experienced trainers provide personalized workout plans and guidance to ensure your success.</h4>
          <div style={{ display: 'flex', gap: '25vw' }}>

            <div style={{ marginLeft: '1rem'}}>
              <h1 style={{ fontSize: '2.5rem', color: '#2b3035', marginBottom: '1.5vh', marginLeft: '3vw' }}>Follow Us</h1>
              <div style={{ fontSize: '1rem', color: '#2b3035', marginLeft: '4vw' }}>
                <a href='https://instagram.com/fit_with_gowtham?igshid=YmM0MjE2YWMzOA=='><ImInstagram style={{ fontSize: '1.5rem', color: '#2b3035',marginBottom: '1.5vh' }} /></a>
                <a href='https://instagram.com/fit_with_gowtham?igshid=YmM0MjE2YWMzOA=='><AiFillFacebook style={{ fontSize: '1.5rem', color: '#2b3035', marginLeft: '1rem',marginBottom: '1.5vh' }} /></a>
              </div>
            </div>
            <div style={{ marginLeft: '1rem'}}>
              <div style={{ fontSize: '1rem', color: '#2b3035', marginLeft: '3vw',marginTop: '2rem' }}>
                <img src="https://elevatesyracuse.com/wp-content/uploads/2019/04/AdobeStock_95873599-1.jpeg" class="rounded-circle" alt="Cinque Terre" style={{width: '15rem', height: '18rem'}}></img> 
              </div>
            </div>

            <div style={{ marginLeft: '1rem'}}>
              <h1 style={{ fontSize: '2.5rem', color: '#2b3035', marginBottom: '1.5vh', marginLeft: '-8rem'}}>Contact Us</h1>
              <div style={{ fontSize: '1rem', color: '#2b3035',marginBottom: '1.5vh'}}>
                
              <p  style={{ marginLeft: '-8rem' }}><BsTelephoneFill />+91 8667383279</p>
              <p style={{ marginLeft: '-10rem' }} ><MdEmail />gowthamraja999@gmail.com</p>
              </div>
            </div>

          </div>
          </div>
        </Card.ImgOverlay>
      </Card>

    </div>

  );
}

export default ImgOverlayExample;