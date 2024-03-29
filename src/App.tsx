import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion';
import { questions } from './utils/Data';
import Img from './images/illustration-woman-online-desktop.svg';
import ImgW from './images/illustration-woman-online-mobile.svg';
import Img2 from './images/illustration-box-desktop.svg';
import Img3 from './images/bg-pattern-desktop.svg';
import Img3Mobile from './images/bg-pattern-mobile.svg';
import { useWindowSize } from './hooks/useWindowSize';

const App = () => {
  const windowSize = useWindowSize();

  return (
    <main>
      <img
        className={`side-img-box ${
          windowSize.width <= 480 ? 'none-display' : ''
        }`}
        src={Img2}
        alt="box"
      />
      <div className="card-container">
        <img className="side-img" src={Img} alt="bg-women" />
        <img className="side-img-mobile" src={ImgW} alt="bg-women" />
        <div className="accordion">
          <h1 className="accordion-header">FAQ</h1>
          {questions.map((item) => (
            <Accordion answer={item.answer} title={item.title} key={item.id} />
          ))}
        </div>
        <img
          className="side-img-pattern"
          src={windowSize.width <= 480 ? Img3Mobile : Img3}
          alt=""
        />
      </div>
    </main>
  );
};

export default App;
