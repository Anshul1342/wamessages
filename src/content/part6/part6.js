import React , { Component } from 'react'
import Aux from '../../Hoc/Auxilliary'
import './part6.css';
import Part7 from './part7/part7'



class part6 extends Component {
    render(){
        return(
            <Aux>
                <div className="container">
                    <div className="row">
                        <div className = "col-sm-10  col-sm-offset-1">
                            <h1 className="fontsiz">
                                    Works With Your 
                                    <br />
                                    Revenue Management Stack
                                    </h1>
                                    <h3 className="fontsiz2">
                                    Managing sales, payments, customer experience or your books:
                                    <br />
                                if it affects your revenue cycle, Chargebee works with it.
                                    </h3>
                                    <img src="https://webstatic.chargebee.com/assets/web/352/images/home/lemon/revenue-management.svg   "></img>
                        </div>
                    </div>
                    <Part7 />

                    <div className = "row  last ">
                        <div className = "col-lg-8">
                            <div className = "row last2nd">
                                <div className = "col-lg-8">
                                    Talk to us about 
                                    <br />
                                    your revernue workflow
                                </div>
                                <div className = "col-lg-4">
                                  <button className="button32">
                    Schedule a Demo
                                </button>
                                </div>
                                </div>
                        </div>

                    </div>
                </div>
            </Aux>
        );
    }
}

export default part6