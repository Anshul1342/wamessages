import React, {Component} from 'react'
import OwlCarousel from 'react-owl-carousel';
import './corousal.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import img1 from '../../images/image1.png';
import img2 from '../../images/image2.jpg';
import img3 from '../../images/image3.png';
import img4 from '../../images/image4.png';
import img5 from '../../images/image5.png';
import img6 from '../../images/image6.png';
import img7 from '../../images/image7.png';

import 'owl.carousel/dist/assets/owl.theme.default.css';
import Aux from '../../Hoc/Auxilliary';

class corosel extends Component{
    render(){
        return(
            <Aux>
                <OwlCarousel 
           className="owl-theme"
           items="7"
           autoplay
           nav
           dots
           loop
           >
               <div className="item">
                   <img className="imgcha"  src = {img1} />
               </div>
               <div className="item">
                   <img className="imgcha" src = {img2} />
               </div>
               <div className="item">
                   <img className="imgcha" src = {img3} />
               </div>
               <div className="item">
                   <img className="imgcha" src = {img4} />
               </div>
               <div className="item">
                   <img className="imgcha" src = {img5} />
               </div>
               <div className="item">
                   <img className="imgcha" src = {img6} />
               </div>
               <div className="item">
                   <img className="imgcha" src = {img7} />
               </div>
           </OwlCarousel>
            </Aux>
        );
    }
}
export default corosel;