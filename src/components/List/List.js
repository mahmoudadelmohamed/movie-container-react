import React, { Component } from 'react';
import Button from '../Buttons/Buttons';
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import "./List.scss";

class List extends Component {

render() {
  const { list, handleClick, title, scrollTo, active_id} = this.props;
  const list_items = list.map(({name, id, api, icon}) => {
    return(
      <li
       className={`list_item mb-2 ${id === active_id ? 'active' : ''}`}
       key={id}
       onClick={() => {handleClick(id, api, name); scrollTo()}} >
         <a href="/#">
          <Button
            iconMarginRight="r"
            iconMarginLeft="l"
            content={name}
            them="outline-secondary"
            size="sm"
            icon={icon || faDotCircle}
          />
         </a>
       </li>
    )
  })
    return (
      <>
      <h3 className="title_uppercase small-bold mb-3">{title}</h3>

        <ul className="list">{ list_items }</ul>

      </>
    );
  }

}

export default List;
