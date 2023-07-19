import React from 'react';
import './Sect1.css';
import img1 from './photo/img.png';
import { Link } from 'react-router-dom';

export const Section1 = () => {
  return (
    <div className='container'>
      <div className="Sect1 pt-5">
        <h1 className='hot'>Хиты продаж</h1>

        <Link to='/product'><div className="cardsrenal row  mt-4">
          <div className=" offset-lg-1 col-lg-2 col-md-4 col-sm-12">
            <div className="card-renal" >
              <img src={img1} alt="" />
              <div className="text-renal">
                <h1 className="hot">12 500тг</h1>
                <p className="pt-1 renalt">
                  RENAULT Корпус фильтра масляного (с радиатором)
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="card-renal" >
              <img src={img1} alt="" />
              <div className="text-renal">
                <h1 className="hot">12 500тг</h1>
                <p className="pt-1 renalt">
                  RENAULT Корпус фильтра масляного (с радиатором)
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="card-renal" >
              <img src={img1} alt="" />
              <div className="text-renal">
                <h1 className="hot">12 500тг</h1>
                <p className="pt-1 renalt">
                  RENAULT Корпус фильтра масляного (с радиатором)
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2  col-md-4 col-sm-12">
            <div className="card-renal" >
              <img src={img1} alt="" />
              <div className="text-renal">
                <h1 className="hot">12 500тг</h1>
                <p className="pt-1 renalt">
                  RENAULT Корпус фильтра масляного (с радиатором)
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="card-renal" >
              <img src={img1} alt="" />
              <div className="text-renal">
                <h1 className="hot">12 500тг</h1>
                <p className="pt-1 renalt">
                  RENAULT Корпус фильтра масляного (с радиатором)
                </p>
              </div>
            </div>
          </div>
        </div></Link>
      </div>
    </div>
  );
};
