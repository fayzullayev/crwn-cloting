import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeSutton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HX4LMGrkIakqCGgiFYCHY475sm9sNHKxRvwJKbdH1VBzpd1kYFgxCBZ8m8jpMIVv3z9mosQySLa409N5MWYHezF00T6OrLg6C";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Cloting Ltd."
      shippingAddress
      billingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeSutton;
