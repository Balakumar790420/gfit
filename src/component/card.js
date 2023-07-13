import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import './card.css';
import Training from '../component/training';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
function GroupExample() {
    return (
     
        <div className='container' id='program'>
            <Training />
        <Carousel responsive={responsive}>
            <div className='muscelgain'><Card  style={{backgroundColor: '#ff6969'}}>
            <Card.Title style={{fontFamily:'Rubik Dirt',fontSize: '3rem'}}>Muscel Gain</Card.Title>
                <Card.Img variant="top" src="https://images.saymedia-content.com/.image/t_share/MTg5NzU3ODYyNDM4NzczOTg2/how-to-gain-muscle-mass-in-three-simple-steps.jpg" style={{marginBottom: '.2vh'}}/>
                <Card.Body >
                
                    <Card.Text style={{fontSize: '1.5rem'}}>
                    Resistance training promotes muscle growth. Examples of resistance training include the use of free weights, your own body weight or resistance bands.
                    </Card.Text>
                </Card.Body>
                
            </Card></div>
            
            <div className='weightgain'><Card style={{backgroundColor: '#ff6969'}} >
            <Card.Title style={{fontFamily:'Rubik Dirt',fontSize: '3rem'}}>Weight Gain</Card.Title>
                <Card.Img variant="top" src="https://qph.cf2.quoracdn.net/main-qimg-31a26f06898cb411a4190c6942454fc9-lq"/>
                <Card.Body>
                
                    <Card.Text style={{fontSize: '1.5rem'}}>
                     If you consume 6000–6500 calories per day for one month,
                     you will gain 10 kg if you are 180 cm tall and weigh 75–80 kilograms
                    </Card.Text>
                </Card.Body>
                
            </Card></div>
            <div className='weightloss'><Card style={{backgroundColor: '#ff6969'}} >
            <Card.Title style={{fontFamily:'Rubik Dirt', fontSize: '3rem'}}>Weight loss</Card.Title>
                <Card.Img variant="top" src="https://www.bodybuilding.com/images/2016/march/what-is-the-best-5-day-workout-split-jon-zamora-after-700xh.jpg" style={{marginBottom: '7vh'}}/>
                <Card.Body>
                   
                    <Card.Text style={{fontSize: '1.5rem'}}>
                    Due to the calorie deficit required to burn each kilo of fat, it is not possible to lose 4.5 kg of pure body fat in just one week. 
                    
                    </Card.Text>
                </Card.Body>
                
            </Card>
            </div>
            <div className='fatloss'><Card style={{backgroundColor: '#ff6969'}}  >
            <Card.Title style={{fontFamily:'Rubik Dirt', fontSize: '3rem'}} >Fat Loss</Card.Title>
                <Card.Img variant="top" style={{marginBottom: '13vh'}} src="https://media1.popsugar-assets.com/files/thumbor/GxharOwAUuwfbLdpXo03vjoZFjA/656x0:3656x3000/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/12/923/n/1922729/0107a03e5d7ab44963ca61.84121993_/i/How-Lose-Belly-Fat-Keep-Off.jpg" />
                <Card.Body >
                   
                    <Card.Text style={{fontSize: '1.5rem'}}>
                    It’s impossible to target belly fat specifically when you diet. But losing weight overall will help shrink your waistline.
                    </Card.Text>
                </Card.Body>
                
            </Card></div>
        </Carousel>
     
        </div>
    );
}

export default GroupExample;