import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) =>{
    const PriceForStripe = price * 100;
    const PublishableKey = 'pk_test_TL3GgVkkHTMwh6AE6xhLrKvC00YOrWv66s';	
   
   const onToken = token => {
       console.log(token);
       alert('Paymeny Successful');
   }
    
    return(
        <StripeCheckout
         label ='Pay Now'
         name = 'CRWN Clothing Ltd.'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description = {`Your total is £${price}`}
         amount = {PriceForStripe}
         panelLabel = 'Pay Now'
         token = {onToken}
         stripeKey = {PublishableKey}
         
        
         />
    );
};

export default StripeCheckoutButton;