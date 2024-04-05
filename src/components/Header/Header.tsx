import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <header className='header'>
      <div className='header__container'>
        <Link className='header__buttons' to={'/'}>
          <button type='button' className='header__button link'>Выйти</button>
          <button type='button' className='header__exit link'></button>
        </Link>
        <div className='header__info'>
          <h1 className='header__title'>Наша команда</h1>
          <p className='header__subtitle'>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
