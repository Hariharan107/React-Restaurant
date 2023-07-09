import React from 'react';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();
  const isloading = fetcher.state === 'loading';
  if (isloading) return <p>Making your order Priority...</p>;
  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <Button type='primary'>Make Priority</Button>
    </fetcher.Form>
  );
};
export const action = async ({  params }) => {
  const { orderId } = params;
  await updateOrder(orderId, { priority: true });
  return null;
};
export default UpdateOrder;
