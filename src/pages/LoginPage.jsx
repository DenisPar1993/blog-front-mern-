import React from 'react'
import { Link } from 'react-router-dom'
import { reqLogin,checkToken } from '../store/slices/AuthSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';

import { useNavigate } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {
  const [username,setUsername]= useState('')
  const [password,setPassword]= useState('')
  const dispatch = useDispatch()
  const status = useSelector(state=>state.auth.status)
  const auth = useSelector(checkToken)
  const navigate = useNavigate()
  
  console.log(status);
  useEffect(()=>{
  if(status){
    toast(status,{
      position:toast.POSITION.BOTTOM_CENTER
    })
  }
  if(auth)navigate('/')

  },[status,auth])
  const onForm=()=>{
    dispatch(reqLogin({username,password}))
    setUsername('')
    setPassword('')
  }
  return (
    <div className='flex justify-center items-center pt-20 '>
      <form className='flex flex-col bg-zinc-900 p-8' onSubmit={(e)=>e.preventDefault()}>
        <h2 className='mb-6 text-center text-lg' >Авторизация</h2>
        <div className='mb-4'>
          <label className='block' htmlFor="">Логин</label>
          <input 
          type="text" 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          placeholder='Введите имя' 
          className='bg-zinc-400 rounded-sm placeholder:text-black pl-3  w-64 h-10'/>
        </div>
        <div className='mb-4'>
          <label className='block mb-1' htmlFor="">Пароль</label>
          <input 
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
           placeholder=' Введите пароль'
           className='bg-zinc-400 rounded-sm w-64 h-10 placeholder:text-black pl-3 '/>
        </div>
        <button 
        onClick={onForm}
        className='bg-yellow-100 rounded-sm py-2 max-w-xs text-black'>
          Войти
          </button>
        <Link
        className='text-xs text-center mt-4 underline' 
        to='/register'
        >Зарегестрироваться</Link>
      </form>
    </div>
  )
}
