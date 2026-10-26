import react, { useState } from 'react';
import italianPizza from '../assets/italian-pizza.png';
import veneciaPizza from '../assets/venecia-pizza.png';
import meatPizza from '../assets/meat-pizza.png';
import cheesePizza from '../assets/cheese-pizza.png';
import argentinaPizza from '../assets/argentina-pizza.png';
import gribnayaPizza from '../assets/gribnaya-pizza.png';
import tomatoPizza from '../assets/tomato-pizza.png';
import italianX2Pizza from '../assets/italian-x2-pizza.png';
import popularBg from '../assets/most-popular-bg.png';
import pizzaslay from '../assets/slicepizza.png';
import curry from '../assets/currypizza.png';
import Aleex from '../assets/alexx.png';
import delicotes from '../assets/delecates.png';
import polupissa from '../assets/polupizza.png';
import together from '../assets/together.png';
import megachees from '../assets/slicechees.png';
import becon from '../assets/eggandbecon.png';
import burito from '../assets/burito.png';
import coffe from '../assets/coffe.png';
import pizzza from '../assets/overpizza.png';
import bigpizza from '../assets/bigpizza.png';
import arrow from '../assets/arrow.png';
import pizzaslice from '../assets/pizzaslice.png';
import fries from '../assets/fries.png';

const Main = () => {
  const [pizzas, setPizzas] = useState([
    { id: 1, name: 'Italian', price: '8,35', img: italianPizza },
    { id: 2, name: 'Venecia', price: '7,35', img: veneciaPizza },
    { id: 3, name: 'Meat', price: '9,35', img: meatPizza },
    { id: 4, name: 'Cheese', price: '8,35', img: cheesePizza },
  ]);

  const [popularPizzas, setPopularPizzas] = useState([
    { id: 5, name: 'Argentina', price: '7,35', img: argentinaPizza },
    { id: 6, name: 'Gribnaya', price: '6,35', img: gribnayaPizza },
    { id: 7, name: 'Tomato', price: '7,35', img: tomatoPizza },
    { id: 8, name: 'Italian x2', price: '8,35', img: italianX2Pizza },
  ]);

  return (
    <div className='px-[130px] pt-[60px]'>
      <h2 className='text-center font-extrabold text-4xl mb-8'>Menu</h2>

      <div className='flex items-center justify-between mb-10 gap-[30px]'>
        <button className='bg-gradient-to-r from-orange-600 to-orange-400 text-white font-semibold text-lg p-[13px] w-[220px] rounded-full'>
          Show All
        </button>
        <button className='text-gray-400 text-lg  bg-[#8B24030D] w-[220px] p-[13px] rounded-[100px] '>Meat</button>
        <button className='text-gray-400 text-lg  bg-[#8B24030D] w-[220px] p-[13px] rounded-[100px] '>Vegetarian</button>
        <button className='text-gray-400 text-lg  bg-[#8B24030D] w-[220px] p-[13px] rounded-[100px] '>Sea products</button>
        <button className='text-gray-400 text-lg  bg-[#8B24030D] w-[220px] p-[13px] rounded-[100px] '>Mushroom</button>
      </div>

      <div className='grid grid-cols-4 gap-6'>
        {pizzas.map((pizza) => (
          <div className='text-center bg-[#8B24030D] rounded-2xl p-6 pt-0 mt-[90px]' key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} className='w-[140px] h-[140px] rounded-full   mx-auto object-cover -mt-[70px]' />
            <h3 className='font-bold text-2xl mt-4'>{pizza.name}</h3>
            <p className='text-gray-400 text-xs mt-2'>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>

            <div className='flex items-center justify-center gap-8 mt-4'>
              <span className='w-[40px] h-[40-px] px-[10px] py-[10px] flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm'>22</span>
              <span className='w-[40px] h-[40px] px-[10px] py-[10px] flex items-center justify-center rounded-full bg-orange-500 text-sm'>28</span>
              <span className='w-[40px] h-[40px] px-[10px] py-[10px] flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm'>33</span>
            </div>

            <button className='border border-orange-500 text-orange-500 text-sm rounded-full px-[50px] py-2 mt-4'>
              + Ingridients
            </button>

            <div className='flex items-center justify-between mt-4'>
              <span className='font-medium  text-2xl'>{pizza.price} $</span>
              <div className='flex items-center gap-3'>
                <button className='w-[23px] h-[23px] rounded-full border border-[#A3A3A3] flex items-center justify-center text-lg text-[#A3A3A3] pb-1'>-</button>
                <span className='text-lg text-[#A3A3A3]'>1</span>
                <button className='w-[23px] h-[23px] rounded-[100px] bg-orange-500 flex items-center justify-center px-[10px] py-[10px] text-xl pb-3'>+</button>
              </div>
            </div>

            <button className='w-full bg-gradient-to-r from-orange-600 to-orange-400 text-white font-semibold text-lg rounded-full py-3 mt-4'>
              Order Now
            </button>
          </div>
        ))}
      </div>

      <div
        className='relative bg-cover bg-center rounded-2xl h-[250px] flex items-center justify-center my-12'
        style={{ backgroundImage: `url(${popularBg})` }}
      >
        <h2 className='text-white font-extrabold text-2xl tracking-widest'>MOST POPULAR PIZZA</h2>
      </div>

      <div className='grid grid-cols-4 gap-6'>
        {popularPizzas.map((pizza) => (
          <div className='text-center bg-[#8B24030D] rounded-2xl p-6 pt-0 mt-[90px]' key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} className='w-[140px] h-[140px] rounded-full   mx-auto object-cover -mt-[70px]' />
            <h3 className='font-bold  text-2xl mt-4'>{pizza.name}</h3>
            <p className='text-gray-400 text-xs mt-2'>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>

            <div className='flex items-center justify-center gap-8 mt-4'>
              <span className='w-[40px] h-[40-px] px-[10px] py-[10px] border-[#A3A3A3] text-[#A3A3A3] items-center justify-center rounded-full border border-gray-500 text-sm'>22</span>
              <span className='w-[40px] h-[40-px] px-[10px] py-[10px] items-center justify-center rounded-full bg-orange-500 text-sm'>28</span>
              <span className='w-[40px] h-[40-px] px-[10px] py-[10px] border-[#A3A3A3] text-[#A3A3A3] items-center justify-center rounded-full border border-gray-500 text-sm'>33</span>
            </div>

            <button className='border border-orange-500 text-orange-500 text-sm rounded-full px-[50px] py-2 mt-4'>
              + Ingridients
            </button>

            <div className='flex items-center justify-between mt-4'>
              <span className='font-medium  text-2xl'>{pizza.price} $</span>
              <div className='flex items-center gap-3'>
                <button className='w-[23px] h-[23px] rounded-full border border-[#A3A3A3] flex items-center justify-center text-lg text-[#A3A3A3] pb-1'>-</button>
                <span className='text-lg text-[#A3A3A3]'>1</span>
                <button className='w-[23px] h-[23px] rounded-[100px] bg-orange-500 flex items-center justify-center px-[10px] py-[10px] text-xl pb-3'>+</button>
              </div>
            </div>

            <button className='w-full bg-gradient-to-r from-orange-600 to-orange-400 text-white font-semibold text-lg rounded-full py-3 mt-4'>
              Order Now
            </button>
          </div>
        ))}
      </div>

      <div className='pb-[50px]'>
        <div className='mt-20'>

          <div className='flex gap-6 mb-6'>
            <div className='relative w-[340px] h-[220px] rounded-2xl overflow-visible'>
              <div className='w-full h-full rounded-2xl overflow-hidden'>
                <img src={pizzaslay} alt="How we cooking" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black/30 flex flex-col justify-between p-4'>
                  <h3 className='font-medium font-Muller text-xl text-white pl-[25px] pt-[60px]'>HOW WE <span className='flex align-center'> COOKING</span></h3>
                  <button className='bg-gradient-to-r from-orange-600 to-orange-400 text-white text-sm font-semibold rounded-full px-6 py-1.5 ml-[25px] w-[180px]'>
                    More
                  </button>
                </div>
              </div>

              <img
                src={becon}
                alt="Bacon and egg decoration"
                className='absolute -top-[-130px] -left-[100px] w-[180px] rotate-[-15deg] z-10 drop-shadow-2xl'
              />
            </div>

            <div className='relative w-[340px] h-[220px] rounded-2xl overflow-hidden'>
              <img src={curry} alt="Our blog" className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/30 flex flex-col justify-between p-4'>
                <h3 className='font-medium font-Muller text-xl text-white pl-[25px] pt-[60px]'>OUR BLOG</h3>
                <button className='bg-gradient-to-r from-orange-600 to-orange-400 text-white text-sm font-semibold rounded-full px-6 py-1.5 ml-[25px] w-[180px]'>
                  More
                </button>
              </div>
            </div>

            <div className='flex-1 flex flex-col justify-center pl-10'>
              <h2 className='font-extrabold text-4xl mb-3'>Events</h2>
              <p className='text-gray-400'>There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!</p>
            </div>
          </div>

          <div className='flex gap-6 mb-6'>
            <div className='relative flex-[1.3] h-[200px] w-[440px] rounded-2xl overflow-hidden'>
              <img src={Aleex} alt="Two pizza for 1 price" className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/30 flex flex-col justify-between p-4'>
                <h3 className='font-medium font-Muller text-xl text-white pl-[25px] pt-[40px]'>TWO PIZZA<br />FOR 1 PRICE</h3>
                <button className='bg-gradient-to-r from-orange-600 to-orange-400 text-white text-sm font-semibold rounded-full px-6 py-1.5 ml-[25px] w-[180px]'>
                  More
                </button>
              </div>
            </div>

            <div className='relative flex-1 h-[200px] w-[440px] rounded-2xl overflow-visible'>
              <div className='w-full h-full rounded-2xl overflow-hidden'>
                <img src={delicotes} alt="Kitchen tour" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black/30 flex flex-col justify-between p-4'>
                  <h3 className='font-medium font-Muller text-xl text-white pl-[25px] pt-[40px]'>KITCHEN<br />TOUR</h3>
                  <button className='bg-gradient-to-r from-orange-600 to-orange-400 text-white text-sm font-semibold rounded-full px-6 py-1.5 ml-[25px] w-[180px]'>
                    More
                  </button>
                </div>
              </div>

              <img
                src={burito}
                alt="Shawarma decoration"
                className='absolute -top-[2px] -right-[120px] w-[200px] z-10 drop-shadow-2xl scale-x-[-1] rotate-[-15deg]'
              />
            </div>
          </div>

          <div className='flex gap-6'>
            <div className='relative flex-1 h-[170px] w-[200px] rounded-2xl overflow-visible'>
              <div className='w-full h-full rounded-2xl overflow-hidden'>
                <img src={polupissa} alt="Free coffee for 3 pizza" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black/30 flex flex-col justify-between p-4'>
                  <h3 className='font-medium font-Muller text-xl text-white pl-[25px] pt-[40px]'>FREE COFFEE<br />FOR 3 PIZZA</h3>
                  <button className='bg-gradient-to-r from-orange-600 to-orange-400 text-white text-sm font-semibold rounded-full px-6 py-1.5 ml-[25px] w-[180px]'>
                    More
                  </button>
                </div>
              </div>

              <img
                src={coffe}
                alt="Coffee cup decoration"
                className='absolute -bottom-10 -left-[75px] w-[160px] z-10 drop-shadow-2xl'
              />
            </div>

            <div className='relative flex-1 h-[170px] w-[200px] rounded-2xl overflow-hidden'>
              <img src={together} alt="Our instagram" className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/30 flex flex-col justify-between p-4'>
                <h3 className='font-medium font-Muller text-xl text-white pl-[25px] pt-[40px]'>OUR<br />INSTAGRAM</h3>
                <button className='bg-gradient-to-r from-orange-600 to-orange-400 text-white text-sm font-semibold rounded-full px-6 py-1.5 ml-[25px] w-[180px]'>
                  More
                </button>
              </div>
            </div>

            <div className='relative flex-1 h-[170px] w-[200px] rounded-2xl overflow-hidden'>
              <img src={megachees} alt="Where are you choose us" className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/30 flex flex-col justify-between p-4'>
                <h3 className='font-medium font-Muller text-xl text-white pl-[25px] pt-[40px]'>WHERE ARE<br />YOU CHOOSE US?</h3>
                <button className='bg-gradient-to-r from-orange-600 to-orange-400 text-white text-sm font-semibold rounded-full px-6 py-1.5 ml-[25px] w-[180px]'>
                  More
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='px-[0px] py-[80px] '>
        <div className='relative flex items-center justify-between gap-16'>

          <div className='flex-1 items-center '>
            <h2 className='font-extrabold text-6xl mb-[14px]'>About us</h2>

            <p className='text-gray-400 text-sm'>
              In just a couple of years, we have opened 6 outlets
              <span className='flex items-center gap-7 text-gray-400'>in different cities: Kazan, Chelyabinsk, Ufa, Samara,</span>
              <span className='flex items-center gap-7 text-gray-400'> Izhevsk, and in the future we plan to develop the</span>
              <span className='flex items-center gap-7 text-gray-400'>network in other major cities of Russia.</span>
            </p>

            <div className='flex mb-8'>
              <img src={pizzza} alt="Our pizzas" className='w-[280px]' />
            </div>

            <p className='text-gray-400 text-sm leading-relaxed'>
              The kitchen of each point is at least: 400-500 
              <span className='flex items-center gap-7 text-gray-400'>sq. m. meters, hundreds of employees, smoothly </span>
              <span className='flex items-center gap-7 text-gray-400'>performing work in order to receive / prepare / </span>
              <span className='flex items-center gap-7 text-gray-400'>form / deliver customer orders on time.</span>
            </p>
          </div>

          <img
            src={arrow}
            alt="Decorative arrow"
            className='absolute top-1/2 left-[40%] -translate-y-1/2 w-[110px]'
          />

          <div className='relative flex-1 flex justify-end'>
            <img
              src={bigpizza}
              alt="Pizza close up"
              className='rounded-2xl w-[560px] h-[540px] pt-[40px] object-cover'
            />

            <img
              src={pizzaslice}
              alt="Pizza slice decoration"
              className='absolute -top-[1px] -right-[50px] w-[160px] rotate-[3deg] drop-shadow-2xl'
            />

            <img
              src={fries}
              alt="Fries decoration"
              className='absolute -bottom-[-8px] left-[-38px] w-[170px] -rotate-[18deg] drop-shadow-2xl'
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Main;