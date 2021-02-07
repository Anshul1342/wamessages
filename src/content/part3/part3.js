import React, { Component } from 'react'
import Aux from '../../Hoc/Auxilliary'
import './part3.css';
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



class part extends Component {
    render(){
        const style15 = {
            color: '#500ad2',
            fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, -apple - system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans - serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '18px',
            marginBottom: '8px'
        }
        return(
            <Aux>
                 <div className = "row part3s">
                <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-0 col-lg-8 third ">
                    <div className = "row ">
                    <div class="col-md-6 col-lg-5 col-lg-offset-1 ">
                    <div classname= "spreedsheet" style = {style15}>
                        No more spreedsheet error
                    </div>
                    <h2 className="automate">
                    Automate Recurring Billing
                    </h2>
                    <div className ="scaling">
                    Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!
                    </div>
                    <div>
                        <ul className="ulchange">
                            <li className="lichange" ><FaCheck color = "#66FF78" />  Billing Schedules</li>
                            <li className="lichange" ><FaCheck color = "#66FF78" />  Proration & Invoicing</li>
                            </ul>
                        <ul className="ulchange">
                            <li className="lichange" ><FaCheck color = "#66FF78" />  Tax management</li>
                            <li className="lichange" ><FaCheck color = "#66FF78" />  Payment Methods</li>
                        </ul>
                    </div>
                    <button className = "buttonnew">Learn More  <FaArrowRight /></button>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <img src = "https://webstatic.chargebee.com/assets/web/352/images/home/lemon/recurring-billing-graphic.svg"></img>
                        </div>

                    </div>
                    </div>
                </div>
            </Aux>
        );
    }
}
export default part;