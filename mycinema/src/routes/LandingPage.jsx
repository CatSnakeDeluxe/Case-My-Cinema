import './LandingPage.css';
import image from '../img/Film-Projector.png'

const LandingPage = () => {
    return ( 
        <div className='container'>
            <h1>Welcome To Our App</h1>

            <p className='landingPageP'>Under the movies tab you will find all movies in theatre right now. Choose a movie to see available dates, times and seats.</p>
            
            <h3 className='landingPageH3'>Don't forget the snacks!</h3>

            <div className='projector-container'>
                <img className='projector' src={image} alt="" />
            </div>
        </div>
     );
}
 
export default LandingPage;