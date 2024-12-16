import React, { useEffect } from 'react'
import LayoutAdmin from '../Components/Admin/LayoutAdmin'
import AjukanTopUp from '../Components/Admin/AjukanTop-Up'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const AjukanTopUpPage = () => {
  const dispatch = useDispatch();
     const navigate = useNavigate();
     const { isError } = useSelector((state) => state.auth);
     
     useEffect(() => {
       dispatch(getMe());
     }, [dispatch]);

     useEffect(() => {
       if (isError) {
         navigate("/");
       }
     }, [isError, navigate]);
  return (
    <LayoutAdmin>
      <AjukanTopUp/>
    </LayoutAdmin>
  )
}

export default AjukanTopUpPage
