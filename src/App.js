import './App.css';
import React from 'react';
import Buba from './IMG_3237.jpg';

export default function App(props) {
  return (
    /*<div>
      <h1>Информация обо мне:</h1>
      <img src="https://mystatfiles.itstep.org/index.php?view_key=rtILv2awXkYrSQ7WVzOr0G9F1kZwIdRQC03dLrvYiKfQ%2FAQS1NMefzZ3dc5lRQwqjdq4RtZauFP3xvu%2FNgsJW1LyX%2F7txQPANhFVkVKAYmY%3D"/>
      <h2>{props.name} {props.lastName}</h2>
      <table>
        <tr><th>Номер телефона</th><td>{props.telNum}</td></tr>
        <tr><th>Электронный адрес</th><td>{props.email}</td></tr>
        <tr><th>Опыт работы</th><td>{props.workExperience}</td></tr>
      </table>
    </div>*/
    <div>
      <h1>Домашний питомец</h1>
      <img src={Buba}/>
      <table>
        <tr><th>Кличка</th><td>{props.name}</td></tr>
        <tr><th>Возраст</th><td>{props.age}</td></tr>
        <tr><th>Порода</th><td>{props.breed}</td></tr>
        <tr><th>Любимая еда</th><td>{props.food}</td></tr>
      </table>
    </div>
  );
}

/*App.defaultProps={name: "Александра", lastName: "Жук", telNum: "067 92 80 323", email: "alexzuck123@gmail.com", workExperience: "2018-работаю до сих пор - учитель информатики в КСШ № 118"}*/

App.defaultProps={name: "Буба", age: "1,5", breed: "Шотландская вислоухая", food: "Purina Sensitive"}