import React , { Component } from 'react'
import Aux from '../../../Hoc/Auxilliary'
import './part7.css';
import { FaArrowRight } from "react-icons/fa";





class part7 extends Component {
    render(){
        const styleimg = {
            width:'400px'
        }
        return(
            <Aux>
                <div className ="row">
                    <div className = "col-log-10">
                        <div className="row">
                            <div className = "col-sm-6 col-md-6  boxes ">
                                <div className = "part7h3" >
                                Quote-to-Cash Automation
                                </div>
                                <h2 className = "part7h2" >
                                Powers Sales and Marketing CRM
                                </h2>
                                <div className ="divimagefinal">
                                <img style={styleimg} src="https://webstatic.chargebee.com/assets/web/352/images/home/lemon/crm-logos.png" />
                                </div>
                                <button className = "buttonblu"> Learn MORE <FaArrowRight /></button>
                                
                            </div>
                            <div className = "col-sm-6 col-md-6 ">
                                <div className = "part7h3" >
                                Offer More payments method
                                </div>
                                <h2 className = "part7h2" >
                                25+ Payment Gateways
                                </h2>
                                <div className ="divimagefinal">
                                <img style={styleimg} src="https://webstatic.chargebee.com/assets/web/352/images/home/lemon/pg-logos.png" />
                                </div>
                                <button className = "buttonblu"> Learn MORE <FaArrowRight /></button>    
                            </div>
                        </div>
                    </div>
                </div>


                <div className ="row marginlelo">
                    <div className = "col-log-10">
                        <div className="row">
                            <div className = "col-sm-6 col-md-10  boxes ">
                                <div className = "part7h3" >
                                Streamline Finance Operations
                                </div>
                                <h2 className = "part7h2" >
                                Syncs with Accounting Software
                                </h2>
                                <div className ="divimagefinal">
                                <img style={styleimg} src="https://webstatic.chargebee.com/assets/web/352/images/home/lemon/acc-logos.png" />
                                </div>
                                <button className = "buttonblu"> Learn MORE <FaArrowRight /></button>     
                            </div>
                        </div>
                    </div>
                </div>


               

            </Aux>
        );
    }
}

export default part7;