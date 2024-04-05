import arrow from '../../images/arrow.svg';
import './MainPage.css';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';

function MainPage() {
  return (
    <>
      <Header />
      <main className='main'>
        <Cards />
        <button className='main__button link'>Показать еще
          <img src={arrow} alt='arrow' className='main__img'></img>
        </button>
      </main>
    </>
  );
}

export default MainPage;
