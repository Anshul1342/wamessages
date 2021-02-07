import React, { Component } from 'react'
import Aux from '../../Hoc/Auxilliary'
import './mainpage.css';
import Corusal from '../corousal/corousal';
import Part6 from '../part6/part6'
import Part3 from '../part3/part3';
import Part4 from '../part4/part4';
import Part5 from '../Part5/Part5'

class mainPage extends Component {


    render() {

        

    return(
            <Aux>
                <div class="row first">
                    <div class="col-lg-12 coldiv">
                        <div className="insidediv">
                            <h1 className="mainh1">
                                <span className="coloring">
                        Subscription Billing & Revenue Operations
                                    </span>
                                <br className=""></br>
                                <span>
                        for Fast-growth B2B SaaS
                                    </span>
                            </h1>
                            <div className="insidediv1">
                    Get the operational sophistication to achieve, sustain,
                                <br></br>
                                and scale recurring revenue.
                                </div>
                            <button className="button">
                    Schedule a Demo
                                </button>
                        </div>
                    </div>
                </div>



                <div class="row part2first">
                    <div class=" col-lg-12  col-sm-10 col-sm-offset-1">
                        <div classname="part2main">
                            <div class="part2">
                    Thousands of Scaling SaaS Businesses Love Us
                            </div>
                            <Corusal/>
                        </div>
                    </div>
                </div>


                <Part3/>

                <Part4/>

                <Part5 />

                <section className = "sect-row  sec-article">
                    <div className="makingedge">
                    </div>
                    <div className = "makingedgebottom">

                    </div>
                    <Part6 />
                </section>

               

             </Aux >
        );
    }
}
export default mainPage