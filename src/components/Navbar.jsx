import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { checkToken,logout} from '../store/slices/AuthSlice'
import { useSelector,useDispatch } from 'react-redux'
import { toast } from 'react-toastify'


export const Navbar = () => {
 const dispatch=useDispatch()
  const isAuth= useSelector(checkToken)
  const navigate = useNavigate()
  const exitAccount=()=>{
    console.log('работает');
    dispatch(logout())
    window.localStorage.removeItem('token')
    toast('Вы вышли из аккауна')
  }

  const activeStyles ={
    color:'white'
  }
  return (
    <div className='flex py-4 justify-between items-center' >
      <span className='flex justify-content items-center w-6 h-6 bg-gray-600 text-sx '>E</span>
       {isAuth && <ul className='flex gap-8'>
        <li>
          <NavLink  
          to= "/"
          className='text-xs text-gray-400 hover:text-white'
          style={({isActive})=>isActive?activeStyles:undefined}
            >Главная</NavLink >
        </li>
        <li>
          <NavLink  
          to= "/posts"
          className='text-xs text-gray-400 hover:text-white'
          style={({isActive})=>isActive?activeStyles:undefined}
            >Мои посты</NavLink >
        </li>
        <li>
          <NavLink  
          to= "/add"
          className='text-xs text-gray-400 hover:text-white'
          style={({isActive})=>isActive?activeStyles:undefined}
            >Добавить пост</NavLink >
        </li>
        </ul>  }
        <div className='flex justify-content items-center bg-gray-600 rounded-sm text-xs px-4'>
          {isAuth?<button onClick={exitAccount} className='px-4 py-2'>Выйти</button>:<Link to='/login'>Войти</Link>}
          
          </div> 
    </div>
  )
}
