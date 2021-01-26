import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUsers} from '../actions/user'

function HomePage(props) {
    const dispatch = useDispatch();
  const usee = useSelector(state => state.user.users);
 const tt = usee.map(cc => cc.firstName)
console.log(usee)
console.log(tt)
  useEffect(() => {
    //Dispatch action to get users to redux store
    dispatch(getUsers);
  }, [])

  return (
    <div className="home-page">
      <h1>REDUX - Home Page</h1>
    {usee && tt}
    </div>
  )
}

export default HomePage;