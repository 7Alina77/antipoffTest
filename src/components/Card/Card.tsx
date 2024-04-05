import './Card.css';
import like from '../../images/like.svg';

function Card() {

  return (
    <section className='card card-hover'>
      <div className='card__image-wrapper'></div>
      <h2 className='card__title'>Ольга Ильина</h2>
      <button className='card__like-wrapper link'>
        <img src={like} alt='like' className='card__like'></img>
      </button>
    </section>
  );
}

export default Card;
