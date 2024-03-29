import React, { PureComponent } from "react";

import styles from "./workOrderInfo.module.css";

export default class workOrderInfo extends PureComponent {
  
  checkAnswer = ( answer ) => {
     if (typeof answer === "object") {
        if (answer.length === 0) {
          return <span> "User didn't review it" </span> ;
        }  

        let text = answer.join(" ") ; 
        return <span> {text} </span> ;
     }  else {
       if (answer) {
        return  (answer === "yes" || answer === "no" ) ?  <span>{answer}</span> :  <span> {answer +" (User comment)"} </span>
       } else {
         return  <span>{"User didn't review it"}</span>  
       }
     }
  }

  render() {
    const workorder = this.props.workorder;

    return (
       <div className={styles.woInfoContainer}>
        {console.log("workORDER",workorder)}
        <div className="row">
          <div className="col-sm">
            <pre className="lead font-weight-bold">Workorder General Info</pre>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <span>
              
              <span className="font-weight-bold">Building Number:</span>
              {workorder.buildingNumber}
            </span>
          </div>
          <div className="col-sm-3">
            
            <span>
              
              <span className="font-weight-bold">Apartment Number :</span>
              {workorder.apartmentNumber}
            </span>
          </div>
          <div className="col-sm-3">
            <span>
            
              <span className="font-weight-bold">Adress :</span>
              {workorder.adress}
            </span>
          </div>
          <div className="col-sm-3">
            <span>
            
              <span className="font-weight-bold">Total price: </span>
              &#36; {workorder.totalPrice}
            </span>
          </div>
        </div>

        <div className="row">
         <div className="col-sm-6">
             <span>Floor : {this.checkAnswer(workorder.questions ? workorder.questions.floor : "")} </span>
         </div>
         <div className="col-sm-6">
         <span>Paint : { this.checkAnswer(workorder.questions ? workorder.questions.paint : "")} </span>
           </div>
        </div>
         
        <div className="row">
         <div className="col-sm-6">
             <span>Windows : {this.checkAnswer(workorder.questions ? workorder.questions.windows : "")} </span>
         </div>
         <div className="col-sm-6">
         <span>Blinds : { this.checkAnswer(workorder.questions ? workorder.questions.blinds : "")} </span>
           </div>
        </div>

        <div className="row">
         <div className="col-sm-6">
             <span>Cleaning : {this.checkAnswer(workorder.questions ? workorder.questions.cleaning : "")} </span>
         </div>
         <div className="col-sm-6">
         <span>Re-glaze : { this.checkAnswer( workorder.questions ? workorder.questions["re-glazed"] : "")} </span>
           </div>
        </div>
        
        <div className="row">
         <div className="col-sm-6">
             <span>Pest Control : {this.checkAnswer(workorder.questions ? workorder.questions["pest cont"] : "")} </span>
         </div>
         <div className="col-sm-6">
      
         </div>
        </div>


        <div className="row">
          <div className="col-sm"><span className={styles.appliance}>Appliances</span></div>
        </div>

        <div className="row">
         <div className="col-sm-6">
             <span>A/C : {this.checkAnswer((workorder.questions ? (workorder.questions.appliances ? workorder.questions.appliances.ac : "" ) : "" ))} </span>
         </div>
         <div className="col-sm-6">
            <span>Microwave : {this.checkAnswer((workorder.questions ? (workorder.questions.appliances ? workorder.questions.appliances.microwave : "" ) : "" ))} </span>
           </div>
        </div>

        <div className="row">
         <div className="col-sm-6">
             <span>Dishwasher : {this.checkAnswer((workorder.questions ? (workorder.questions.appliances ? workorder.questions.appliances.dishwasher : "" ) : "" ))} </span>
         </div>
         <div className="col-sm-6">
            <span>Refrigerator : {this.checkAnswer((workorder.questions ? (workorder.questions.appliances ? workorder.questions.appliances.refrigeRator : "" ) : "" ))} </span>
           </div>
        </div>

        <div className="row">
         <div className="col-sm-6">
         <span>Stove : {this.checkAnswer((workorder.questions ? (workorder.questions.appliances ? workorder.questions.appliances.stove : "" ) : "" ))} </span>
         </div>
         <div className="col-sm-6">
            
           </div>
        </div>
         
        {/* {console.log("TESTTEST", workorder)}
        {console.log("TESTTEST questions",  workorder.questions["pest cont"])}
        {console.log("aa" , typeof workorder.questions.appliances.ac)} */}
      </div>
    );
  }
}
