import{FaMapPin} from 'react-icons/fa';

const HeroSignUpBanner = () => {
  return (
    <div className="hero_signup_banner mt-8 mb-8 flex flex-row justify-between border">
      <div className="hero_signup_image border w-100 h-100 ">
        <img className="max-w-96 object-cover" src="./images/pic2.jpg" alt="Description of the image" />
      </div>
      <div className="sbanner ml-4 flex-grow">
        <div className="text-7xl mt-4 mb-8">
          Up your work game with us
        </div>

        <div className='flex flex-row mb-5'>
          <div>
            <FaMapPin size={32} color="black"/>
          </div>
          <div>
            <h2 className='text-2xl'> Post a job and hire online</h2>
            <h1>Finding talent doesn't have to be a chore. Post a job or we can search for you!</h1>
          </div>
        </div>

        <div className='flex flex-row mb-5'>
          <div>
            <FaMapPin size={32} color="black"/>
          </div>
          <div>
            <h2 className='text-2xl'>Work with the best without breaking the bank</h2>
            <h1>teamWork makes it affordable to up your work and take advantage of low transaction rates.</h1>
          </div>
        </div>

        <div className='flex flex-row mb-5'>
          <div>
            <FaMapPin size={32} color="black"/>
          </div>
          <div>
            <h2 className='text-2xl'>No cost to join</h2>
            <h1>Register and browse professionals, explore projects, or even book a consultation.</h1>
          </div>
        </div>
        
        <button className="subtn text-base font-fjalla-one ml-5 mt-10 bg-white border border-green-500 py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white">
          Sign up
        </button>

      </div> 
    </div>    
  );
}

export default HeroSignUpBanner;
