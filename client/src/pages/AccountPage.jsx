import React, { useContext, useState } from 'react';
import { UserContext } from '../userContext';
import {  Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Places from './Places';
import AccountNav from '../AccountNav';

const AccountPage = () => {

  const [redirect, setRedirect] = useState(null);

    const {ready,user,setUser} = useContext(UserContext);

  // if(!ready){
  //    return 'Loading....';
  //  }




  let {subpage} = useParams();
  if(subpage === undefined){
    subpage = 'profile';
  }


  async function logout() {
   await axios.post('/logout');
   setUser(null);
   setRedirect('/');
  }
   
    if(ready && !user && !redirect){
      return <Navigate to={'/login'} />
  }



  if(redirect){
    return <Navigate to={redirect}/>
  }

  return (
    <div>
    <AccountNav/>
    {subpage === 'profile' && (
      <div className='text-center max-w-lg mx-auto'>
        Logged in as {user.name} ({user.email})<br/>
        <button onClick={logout} className='primary max-w-sm mt-2'>Logout</button>
      </div>
      
    )}
    {subpage === 'places'&& (
      <Places/>
    )}
    </div>
  );
}

export default AccountPage;
