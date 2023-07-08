import { useSelector } from 'react-redux';

function Username() {
  const userName = useSelector((state) => state.user.userName);
  const user = userName ? `Welcome ${userName}` : 'Welcome Guest';
  return <div className='hidden text-sm font-semibold md:block'>{user}</div>;
}

export default Username;
