import React, { Component } from 'react';
import './Categories.scss';

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: 'Всі',
          name: 'Всі',
        },
        {
          key: 'Ванни',
          name: 'Ванни',
        },
        {
          key: 'Душеві кабіни',
          name: 'Душеві кабіни',
        },
        {
          key: 'Котли',
          name: 'Котли',
        },
        {
          key: 'Водонагрівачі',
          name: 'Водонагрівачі',
        },
        {
          key: 'Унітази',
          name: 'Унітази',
        },
        {
          key: 'Инструмент',
          name: 'Инструмент',
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div
            key={el.key}
            onClick={() => this.props.chooseCaterory(el.key)}
            className="buttonCategories">
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
