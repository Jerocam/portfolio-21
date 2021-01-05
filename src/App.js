import React, {Component} from 'react';
import './styles/style.css';
import About from './contents/about';
import Services from './contents/services';
import Portfolio from './contents/portfolio';
import Home from './contents/home';
import Footer from './contents/footer';
import Nabvar from './contents/navbar';
import { Element } from 'react-scroll';

export default class App extends Component {
 
  render() {
    return (
      <React.Fragment>
      <Nabvar/>
      <Element name="navHome"><Home/></Element> 
      <Element name="navAbout"><About/></Element>
      <Element name="navServ"><Services /></Element>
      <Element name="navPortf"><Portfolio /></Element> 
      <Footer/>
    </React.Fragment>
    )
  }
}
