import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilmDetail } from '../../modules/actions';

class FilmDetails extends Component {
  componentDidMount() {
    const filmIndex = this.props.match.params.number;
    console.log('params: ' + filmIndex);
    this.props.getFilmDetail(filmIndex);
  }

  renderFilmDetail = () => {
    const details = this.props.filmReducers.filmDetail;
    return (
      <div>
        <p>Title: {details.title}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="section-wrapper">
        <div className="container">
          <p>This is Film Details.</p>
          {this.renderFilmDetail()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filmReducers: state.filmReducers
});

const mapDispatchToProps = ({
  getFilmDetail: getFilmDetail
})



export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);