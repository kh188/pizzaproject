import react from 'react';
import logo from '../assets/pizzashop.png';
import shopicon from '../assets/shoop.png';
import molniya from '../assets/logomolniya.png';
import video from '../assets/fotovideo.png';
import pizzaphoto from '../assets/pizzaphoto.png';
import fries from '../assets/fries.png';
import pizzaslice from '../assets/pizzaslice.png';
import arrow from '../assets/arrow.png';
import arrow2 from '../assets/arrow2.png';


const Header = () => {
    return (
        <div className='px-[130px] py-[35px] pb-[160px]'>
            <nav className='flex align-center justify-between'>
                <div><img src={logo} alt="Pizza Shop Logo" /></div>
                <div>
                    <ul className='flex align-center justify-between gap-[70px]'>
                        <li className='relative text-orange-500 cursor-pointer'>
                            Home
                            <span className='absolute left-1/2 -translate-x-1/2 top-full mt-1 w-1.5 h-1.5 bg-orange-500 rounded-full'></span>
                        </li>
                        <li className='text-gray-400 hover:text-orange-500 cursor-pointer transition-colors'>Menu</li>
                        <li className='text-gray-400 hover:text-orange-500 cursor-pointer transition-colors'>Events</li>
                        <li className='text-gray-400 hover:text-orange-500 cursor-pointer transition-colors'>About</li>
                    </ul>
                </div>
                <div className='flex align-center justify-center gap-4'>
                    <button className='bg-gradient-to-r from-orange-600 to-orange-400 text-white font-semibold px-8 py-2.5 rounded-full'>
                        Log in
                    </button>
                    <button className='bg-orange-500 p-3 rounded-full flex items-center justify-center'>
                        <img src={shopicon} alt="Cart Icon" className='w-[15px]' />
                    </button>
                </div>
            </nav>

            <div className='flex items-center justify-between'>
                <div>
                    <div>
                        <h1 className='font-extrabold text-6xl flex flex-col pt-[110px] pb-[20px]'>
                            <span className='flex items-center gap-7'>
                                The Fastest
                                <img className='w-[80px]' src={arrow} alt="arrow" />
                            </span>

                            <span className='flex items-center gap-2'>
                                Pizza
                                <img src={molniya} alt="Molniya Icon" className='w-[80px] inline-block' />
                                Delivery
                            </span>
                        </h1>
                        <p className='text-[gray] text-sm pb-[23px]'>We will deliver juicy pizza for your family in 30 <br /> minutes, if the courier is late - <span> pizza is free!</span></p>
                    </div>
                    <div>
                        <p className='text-[gray]'>Cooking process:</p>
                        <img className='ml-[-30px] pb-[55px]' src={video} alt="Cooking Process" />
                    </div>

                    <div className='relative'>
                        <div className="inline-flex items-center border-2 border-orange-500 rounded-full overflow-hidden w-fit">
                            <button className="bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-lg px-8 py-3.5 rounded-full">
                                To order
                            </button>
                            <button className="bg-transparent text-orange-400 font-semibold text-lg px-7 py-3.5">
                                Pizza-Menu
                            </button>
                        </div>

                        <img
                            src={arrow2}
                            alt="Decorative arrow 2"
                            className='absolute top-[80px] left-[300px] w-[160px]'
                        />
                    </div>

                </div>

                <div className='relative'>
                    <img src={pizzaphoto} alt="Pizza with sauces" className='rounded-[30px] w-[400px] h-[600px] shadow-[0_0_80px_20px_rgba(255,120,0,0.4)] mt-[50px]' />
                    <img src={pizzaslice} alt="Pizza slice decoration" className='absolute -top-[70px] -right-[120px] w-[250px] rotate-10 drop-shadow-2xl' />
                    <img src={fries} alt="Fries decoration" className='absolute -bottom-[70px] -left-[130px] w-[212px] -rotate-6 drop-shadow-2xl' />
                </div>
            </div>


        </div>
    );
};

export default Header;