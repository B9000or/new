import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mx-0">

        <div className='h1 h-20 text-5xl mt-4 pt-4 ml-[40px] pl-[40px] border-t-4 border-l-4 border-[#330570]'>
          Сервис предоставления дорожек для боулинга “Сизиф” 
        </div>
        
        <div className=' mt-[100px] flex justify-center border-4 rounded-xl mx-[25%]'>
          <div className='text-4xl w-[800px] flex-col  m-8 '>
            <a className='h2 flex justify-center mb-8 font-semibold text-[#330570]'>Забронировать дорожку</a>
            <form className=' text-3xl'>
              <label for='Name' className='flex flex-start text-[#7373D9]'>
                Введите ваше имя: 
                <input name='Name' type='name' className='ml-[77px] border-b-2 w-[460px] border-[#4F4FD9] invalid:border-red-800' required/>
              </label>
              <label for='Email' className='my-4 flex flex-start text-[#7373D9]'>
                Введите вашу почту:
                <input name='Email' type='email' className='ml-[55px] w-[460px] border-b-2 invalid:border-red-800 valid:border-[#4F4FD9]' 
                required pattern='/\A[^@]+@([^@\.]+\.)+[^@\.]+\z/' />
              </label>
              <label for='tel' className='my-4 flex flex-start text-[#7373D9]'>
                Введите ваш телефон:
                <input name='tel' type='tel' className='ml-[35px] w-[460px] border-b-2 border-[#4F4FD9]'/>
              </label>
              <label for='choice' className='my-4 flex flex-wrap text-[#7373D9]'>
                Выберите свободную дорожку:
                <input name='choice' type='number' min={1} max={5} className='ml-[55px] h-[50px] w-[50px] border-b-2 border-[#4F4FD9]' required />
              </label>
              <label for='date' className='my-4 flex flex-start text-[#7373D9]'>
                Выберите дату бронирования:
                <input name='date' type='date' className='ml-[35px] w-[460px] border-b-2 border-[#4F4FD9]'/>
              </label>
              
              <div className='flex justify-center w-full mt-14'>
              <input type='submit' className='border-2 rounded-xl h-20 w-80 border-[#4F4FD9] cursor-pointer hover:border-[#090974]'></input>
              </div>
            </form>
          </div>
        </div>

        <footer className='flex justify-row mt-[50px] pb-[19px] bg-[#7373D9] text-white pt-[12px]'>
          <div className='w-[10%] mx-auto '>
            <div className='text-2xl'>
              ПробаТестТочка
            </div>
            <div className='text-2xl'>
              ПробаТестТочка
            </div>
            <div className='text-2xl'>
              ПробаТестТочка
            </div>
          </div>
          <div className='w-[10%] mx-auto'>
            <div className='text-2xl'>
              ПробаТестТочка
            </div>
            <div className='text-2xl'>
              ПробаТестТочка
            </div>
            <div className='text-2xl'>
              ПробаТестТочка
            </div>
          </div>
          <div className='w-[10%] mx-auto'>
            <div className='text-2xl'>
              LOGO
            </div>
            <div className='text-2xl'>
              Сизиф
            </div>
          </div>
        </footer>
    </div>
  );
}

export default App;
