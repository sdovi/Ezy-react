import React from 'react'
import { useState } from 'react';
import './view.css';
import star from './Photo/Star 1.png';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../context';

export const Mobile_Versions = () => {
    const { array } = useContext(Context);
    const infos = useParams();
    const [isFullscreen, setIsFullscreen] = useState(false); // Состояние полноэкранного режима
    const [fullscreenPhoto, setFullscreenPhoto] = useState(''); // Ссылка на полноразмерное фото
  
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
  
    return (
        <div>
            
    <div>
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
              <div className='View-text-twocards'>
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
                  <button className='view-btn1'>Заказать</button>
                  <button className='view-btn2'>В корзину</button>
                </div>
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
        </div>
    )
}
