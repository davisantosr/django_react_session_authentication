import { act } from 'react-dom/test-utils';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
 } from '../actions/types';


 const initialState = {
   isAthenticated: null,
   username: '',
   first_name: '',
   last_name: '',
   phone: '',
   city: '',
 }

 export default function(state=initialState, action) {
   const { type, payload } = action;

   switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state, 
        isAuthenticated: true,
        username: payload
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false, 
        username: ''
      }
    
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
      return state

    default:
      return state
   }
 }