import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  getCurrentQuantityByID,
  deleteItem,
} from './cartSlice';
const UpdateCartQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    // if (currQuantity === 0) return;
    dispatch(increaseItemQuantity(pizzaId));
  };
  const handleDecrement = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  return (
    <div className='flex gap-2 items-center md:gap-3'>
      <Button type='round' onClick={handleDecrement}>
        -
      </Button>
      <p className='text-sm font-bold'>{currentQuantity}</p>
      <Button type='round' onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default UpdateCartQuantity;
