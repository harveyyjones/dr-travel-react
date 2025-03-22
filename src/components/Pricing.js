import React from 'react';

function Pricing() {
  return (
    <section className="Pricing">
      <h2>Pricing</h2>
      <div className="Pricing-options">
        <div className="Pricing-option">
          <h3>Basic</h3>
          <p>$10/month</p>
          <button className="secondary-button">Choose Plan</button>
        </div>
        <div className="Pricing-option">
          <h3>Pro</h3>
          <p>$20/month</p>
          <button className="secondary-button">Choose Plan</button>
        </div>
        <div className="Pricing-option">
          <h3>Enterprise</h3>
          <p>Contact us</p>
          <button className="secondary-button">Choose Plan</button>
        </div>
      </div>
    </section>
  );
}


function PricingOption(){
  return (
  <div className = 'Pricing'/>
);
}




function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}


function MyButtonX(){
  function handleClick(){
    alert('You clicked me!');
  }

 return (
  <button onClick = {handleClick}>
   <div> Click me

    
   </div>
  </button>
 )
}
export default Pricing; 