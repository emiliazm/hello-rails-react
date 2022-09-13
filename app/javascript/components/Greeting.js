import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  const greetings = useSelector((state) => state.greetings);
  return (
    <h1>
      {greetings.message}
    </h1>
  );
};

export default Greeting;
