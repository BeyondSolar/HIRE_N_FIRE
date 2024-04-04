import{FaMapPin} from 'react-icons/fa';

const SBanner = () => {
  return (
    <div className="sbanner">
        <h6>Up your work game with us</h6>   
        <h2> <FaMapPin size={32} color="black"/>Post a job and hire online</h2>
        <h1>Finding talent doesn't have to be a chore. Post a job or we can search for you!</h1>

        <h2> <FaMapPin size={32} color="black"/>Work with the best without breaking the bank</h2>
        <h1>Upwork makes it affordable to up your work and take advantage of low transaction rates.</h1>

        <h2> <FaMapPin size={32} color="black"/>No cost to join</h2>
        <h1>Register and browse professionals, explore projects, or even book a consultation.</h1>
        
        <button className="subtn">Sign up</button>
    </div>    
  );
}

export default SBanner;
