import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Films from '../components/Films/Films';
import FilmDetails from '../components/FilmDetails/FilmDetails';

const FilmPath = () => (
  <Switch>
    <Route exact path='/films' component={Films}/>
    <Route path='/films/:number' component={FilmDetails}/>
  </Switch>
)


export default FilmPath;