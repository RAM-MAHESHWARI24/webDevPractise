import './Card.css';
import profilePic from './assets/HM.jpg';
function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="profile pic" id="profilePic" />
            <h2 className='cardTitle'>Hemonesh Maheshwari</h2>
            <p>I am a software engineer</p>
        </div>
    );
}
export default Card;