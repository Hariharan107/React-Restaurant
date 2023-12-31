import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
const DeleteItem = ({ pizzaId,  }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem(pizzaId));
  };
  return (
    <Button type='small' onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteItem;
