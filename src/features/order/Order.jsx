// Test ID: IIDSAT
import { useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff

  const {
    priority,
    status,
    estimatedDelivery,
    orderPrice,
    priorityPrice,
    customer,
  } = useLoaderData();
  // const deliveryIn = calcMinutesLeft(estimatedDelivery);
  const deliveryIn = 829;

  return (
    <div>
      <div>
        <h1>{customer}</h1>
        <h2>Status</h2>
        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}
export const loader = async ({ params: { id } }) => {
  const data = getOrder(id);
  return data;
};
export default Order;
