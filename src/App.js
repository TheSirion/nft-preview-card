import Clock from "./assets/images/icon-clock.svg";
import EthereumIcon from "./assets/images/icon-ethereum.svg";
import Avatar from "./assets/images/image-avatar.png";
import Equilibrium from "./assets/images/image-equilibrium.jpg";

const App = () => {
  return (
    <div className='App bg-main-bg h-screen flex justify-center items-center'>
      <div className='card max-w-xs bg-card-bg p-5 rounded-2xl shadow-2xl'>
        <div className='card-body'>
          <div className='card-image mx-auto hover:saturate-150'>
            <img
              className='rounded-lg cursor-pointer'
              src={Equilibrium}
              alt='Equilibrium'
            />
          </div>
          <div className='card-content'>
            <h1 className='text-xl text-white font-semibold my-3 cursor-pointer transition duration-500 hover:text-cyan'>
              Equilibrium #3429
            </h1>
            <p className='text-soft-blue font-light'>
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className='flex flex-row justify-between my-4'>
              <div className='flex items-center'>
                <img className='inline-block mr-2' src={EthereumIcon} alt='' />
                <span className='text-cyan'>0.041 ETH</span>
              </div>
              <div className='flex items-center'>
                <img className='inline-block mr-2' src={Clock} alt='' />
                <span className='text-soft-blue font-light'>3 days left</span>
              </div>
            </div>
          </div>
        </div>
        <div className='card-footer mt-2 pt-3 border-t border-t-line flex items-center'>
          <img
            className='max-h-9 mr-3 border border-white rounded-full'
            src={Avatar}
            alt='avatar'
          />
          <p className='text-soft-blue font-light'>
            Creation of{" "}
            <a
              className='text-white cursor-pointer transition duration-500 hover:text-cyan'
              href='/author'>
              Jules Wyvern
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
