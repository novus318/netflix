import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import "./App.css";
import {originals,actions, comedy, horror, romance, documentry} from './url'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Originals'netflix/>
      <RowPost url={actions} title='Actions'iSmall/>
      <RowPost url={comedy} title='Comedies'iSmall/>
      <RowPost url={horror} title='Horror'/>
      <RowPost url={romance} title='Romance'iSmall/>
      <RowPost url={documentry} title='Documentaries'/>
    </div>
   
  );
}

export default App;
