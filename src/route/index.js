import { Navigate } from 'react-router-dom'
import Admin from '../page/Admin'
import Goods from '../page/Goods'
import Position from '../page/Position'
import User from '../page/User'



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/adminlist',
    element: <Admin />
  },
  {
    path: '/positionlist',
    element: <Position />
  },
  {
    path: '/userlist',
    element: <User />
  },
  {
    path: '/goodslist',
    element: <Goods />
  },
  {
    path: '/',
    element: <Navigate to='/lb' />
  }
]