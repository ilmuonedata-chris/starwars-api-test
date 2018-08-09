import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Style.css';
import { Link } from 'react-router-dom';

class BoxFilm extends React.PureComponent {  
  render() {
    const { data, filmId } = this.props;
    return(
      <div className="box">
        <p>{data.title}</p>
        <hr />
        <Link to={'/films/'+ filmId}>
          <FontAwesome
            name='arrow-right'
          />
        </Link>
      </div>
    )
  }
}

export default BoxFilm;