import './LandingPage.css';
import image from '../img/Film-Projector.png'

const LandingPage = () => {
    return ( 
        <div>
            <h1>Welcome to our amazing app</h1>
            <img src={image} alt="" />
        </div>
     );
}
 
export default LandingPage;