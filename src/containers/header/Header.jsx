import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className="gpt3__header section__pading" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let't Build Something Amazing with GPT+3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          culpa veniam voluptate repudiandae! Inventore provident excepturi illo
          perspiciatis aut atque dolorum, nostrum et nemo repellat corporis,
          dolor libero laudantium. Quaerat!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
