import react from 'react';
import icons from '../assets/icons.png';



const Footer = () => {
    return (
        <footer className='px-[130px] pt-[60px] pb-[40px] bg-[#170600]'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-orange-500 font-extrabold text-2xl'>pizzashop</h2>
                </div>

                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-white'>Home</h3>
                    <a href='#' className='text-gray-400 text-sm'>To Order</a>
                    <a href='#' className='text-gray-400 text-sm'>About us</a>
                    <a href='#' className='text-gray-400 text-sm'>Events</a>
                    <a href='#' className='text-gray-400 text-sm'>Menu</a>
                </div>

                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-white'>Events</h3>
                    <a href='#' className='text-gray-400 text-sm'>3 Pizza 1 Free Coffee</a>
                    <a href='#' className='text-gray-400 text-sm'>2 Pizza for 1 Price</a>
                    <a href='#' className='text-gray-400 text-sm'>Kitchen Tour</a>
                </div>

                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-white'>Menu</h3>
                    <a href='#' className='text-gray-400 text-sm'>Show All</a>
                    <a href='#' className='text-gray-400 text-sm'>Seaproducts</a>
                    <a href='#' className='text-gray-400 text-sm'>Vegan</a>
                    <a href='#' className='text-gray-400 text-sm'>Meat</a>
                </div>

                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-white'>About Us</h3>
                    <a href='#' className='text-gray-400 text-sm'>Our History</a>
                    <a href='#' className='text-gray-400 text-sm'>Why We?</a>
                </div>
            </div>

            <div className='flex items-center justify-between mt-16'>
                <p className='text-orange-500 font-semibold'>+7 (937) 333-55-33</p>

                <div className='flex gap-4'>
                   <img src={icons} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;