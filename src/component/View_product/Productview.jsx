import React, { useState } from 'react';
import './view.css';
import benzin from './Photo/Rectangle 95.png';
import star from './Photo/Star 1.png';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../context';
import { Mobile_Versions } from './Mobile_Versions';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';     
import Modal from 'react-modal'; 
import axios from 'axios';                                                    

export const Productview = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const { array } = useContext(Context);
  const infos = useParams();
  const [isFullscreen, setIsFullscreen] = useState(false); // Состояние полноэкранного режима
  const [fullscreenPhoto, setFullscreenPhoto] = useState(''); // Ссылка на полноразмерное фото
  const [change, setChange] = useState(true); // Ссылка на полноразмерное фото
  const { addItem, items, removeItem } = useCart();

  // Функция для открытия полноэкранного режима с выбранным фото
  const openFullscreen = (photo) => {
    setIsFullscreen(true);
    setFullscreenPhoto(photo);
  };

  // Функция для закрытия полноэкранного режима
  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenPhoto('');
  };

  const Hadlecheck = (el) => {
    setChange(false)
    addItem(el)

  }  

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.startsWith('+998')) {
      setPhone(inputValue);
    } else if (inputValue === '+') {
      setPhone('+998');
    }
  };

  const postApi = () => {
    axios
      .post('http://127.0.0.1:8000/api/accepting/', {
        title: fullName,
        price: phone,
        EMail: email,
        description: comments,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const deletecheck = (el) => {
    setChange(true)
    removeItem(el.id)

  }

  return (
    <div className='pt-5'>
       <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Модальное окно"
        className="modal12"
        overlayClassName="overlay12"
      >
        <h2 className="buy">Купить</h2>
        <form onSubmit={postApi}>
          <input
            className="input-field"
            type="text"
            placeholder="Ф.И.О"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Телефон"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Комментарии к заказу"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <button type="submit" className="otpravit">
            Отправить
          </button>
        </form>
      </Modal>

      <div className='laptop'>
        {array
          .filter((card) => card.id == infos.id)
          .map((card) => (
            <div className='container ' key={card.id}>
              <div className='View-cards'>
                <div className='view-photo'>
                  <img
                    className={`benz ${isFullscreen ? 'fullscreen' : ''}`}
                    src={card.photo}
                    alt=''
                    onClick={() => openFullscreen(card.photo)}
                  />
                  <div className='view-photo-common'>
                    <img className={`benzing ${isFullscreen ? 'fullscreen' : ''}`} src={card.photo} style={{ cursor: 'pointer' }} alt='' onClick={() => openFullscreen(card.photo)} />
                    <img className={`benzing ${isFullscreen ? 'fullscreen' : ''}`} src={card.photo2} style={{ cursor: 'pointer' }} alt='' onClick={() => openFullscreen(card.photo2)} />
                    <img className={`benzing ${isFullscreen ? 'fullscreen' : ''}`} src={card.photo3} style={{ cursor: 'pointer' }} alt='' onClick={() => openFullscreen(card.photo3)} />
                    <img className={`benzing ${isFullscreen ? 'fullscreen' : ''}`} src={card.photo4} style={{ cursor: 'pointer' }} alt='' onClick={() => openFullscreen(card.photo4)} />
                    <img className={`benzing ${isFullscreen ? 'fullscreen' : ''}`} src={card.photo5} style={{ cursor: 'pointer' }} alt='' onClick={() => openFullscreen(card.photo5)} />
                  </div>
                </div>
                <div className='View-text-twocards pt-5'>
                  <h4 className='motors pb-3'>{card.title}</h4>
                  <div className='otziv texts-views'>
                    <img className='stars' src={star} alt='' />
                    <img className='stars' src={star} alt='' />
                    <img className='stars' src={star} alt='' />
                    <img className='stars' src={star} alt='' />
                    <img className='stars' src={star} alt='' />
                    <p className='view-p otziv50'>5.0</p>
                    <p className='view-p  otzid130'>130 отзывов</p>
                    <p className='view-p'>288 заказов</p>
                  </div>
                  <p className='view-price pt-3'>Цена</p>
                  <h5 className='price-view'>{card.price} ₸</h5>
                  <div className='view-button'>
                    <button className='view-btn1'onClick={openModal} >Заказать</button>

                    {!change ? 

                    (
                      <button class="view-btn2" onClick={() => deletecheck(card)} >Убрать из корзины</button>
                    
                    ) :
                      (
                        <button class="view-btn2" onClick={() => Hadlecheck(card)} >В корзину</button>
                      )
                    }


                  </div>
                    
                  <Link to='https://t.me/Sdovi_Money'><div className="classtelegram">
                  <i class="fa-brands fa-telegram fa-2xl tg"></i>
                  <h5 className='zakazth'>Заказать в ТГ</h5>

                  </div></Link>
                  <div className='info-copelachiya-view'>
                    <p className='copelachiya'>Комплектация</p>
                    <p className='obyom-view'>объем: 5 л</p>
                  </div>
                </div>
              </div>
              <div className='deskription-view'>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        {isFullscreen && (
          <div className='fullscreen-overlay' onClick={closeFullscreen}>
            <img className='fullscreen-image' src={fullscreenPhoto} alt='' />
          </div>
        )}

      </div>
      <div className='mobile-view'>
        <Mobile_Versions />

      </div>
      



    </div>
  );


};

