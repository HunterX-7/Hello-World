import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getGreeting } from './Greeting';

const App = () => {
  const greet = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);
  
  return (
  <>
    <h1 style={{textAlign: 'center'}}>Random Greeting Generator: </h1>
    <h2 style={{textAlign: 'center', fontWeight: 'bold'}}>{greet}</h2>
  </>
  );
};

export default App;