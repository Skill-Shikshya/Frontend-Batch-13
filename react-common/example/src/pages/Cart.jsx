import React from "react";
import Button from "../components/ui/Button";

function Cart({ selected }) {
  function onCheckout() {
    console.log(selected.map((item) => item.id));
  }
  return (
    <div>
      <ul>
        {selected.map((data) => {
          return (
            <li key={data.id}>
              {data.title} {data.price}
            </li>
          );
        })}
      </ul>
      {selected.length > 0 ? (
        <Button onClick={onCheckout}>Checkout</Button>
      ) : (
        <>No items selected for checkout</>
      )}
    </div>
  );
}

export default Cart;
