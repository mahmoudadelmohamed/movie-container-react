import React from 'react';
import { FaDotCircle  } from 'react-icons/fa';
import "./GenresList.scss";

const GenresList = ({ list, title, className }) => {
  const listOfGeners = list.map(item => {
    return (
      <li
      key={item.id}
      value={item.name}
      className="title_uppercase small-bold inline-item mr-3 mt-2"
      >  <FaDotCircle className="dot_icon mr-1" />{item.name}</li>

    );
  })
  return (
    <div className={className}>
     <h2 className="title_uppercase title_mt">{title}</h2>
       <ul className="list-unstyled d-flex inline-list">
     { listOfGeners }
     </ul>
    </div>
  );
}
export default GenresList;
