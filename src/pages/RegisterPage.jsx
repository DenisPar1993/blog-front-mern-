import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { checkToken, reqRegistration } from '../store/slices/AuthSlice'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
export const RegisterPage = () => {
  const [username,setUsername]= useState('')
  const [password,setPassword]= useState('')
  const dispatch = useDispatch()
  const status = useSelector(state=>state.auth.status)
  const navigate = useNavigate();
  const auth = useSelector(checkToken)
  console.log(status);
  useEffect(()=>{
  if(status){
    toast(status,{
      position:toast.POSITION.BOTTOM_CENTER
    })
    if(auth)navigate('/')
  }
  },[status,auth])
  const onForm=()=>{
    dispatch(reqRegistration({username,password}))
      toast(status,{
      position:toast.POSITION.BOTTOM_CENTER
    })
    setUsername('')
    setPassword('')
  }
  return (
    <div className='flex justify-center items-center pt-20 '>
    <form className='flex flex-col bg-zinc-900 p-8' onSubmit={(e)=>e.preventDefault()}>
      <h2 className='mb-6 text-center text-lg' >Регистрация</h2>
      <div className='mb-4'>
        <label className='block' htmlFor="">Логин</label>
        <input 
        type="text"
        value={username} 
        onChange = {(e)=>setUsername(e.target.value)}
        placeholder='Введите имя' 
        className='bg-zinc-400 rounded-sm placeholder:text-black pl-3  w-64 h-10'/>
      </div>
      <div className='mb-4'>
        <label className='block mb-1' htmlFor="">Пароль</label>
        <input 
        type="password"
        value={password}
        onChange = {(e)=>setPassword(e.target.value)}
         placeholder=' Введите пароль'
         className='bg-zinc-400 rounded-sm w-64 h-10 placeholder:text-black pl-3 '/>
      </div>
      <button 
      onClick={onForm}
      className='bg-yellow-100 rounded-sm py-2 max-w-xs text-black'>Отправить</button>
      <Link
      className='text-xs text-center mt-4 underline' 
      to='/login'
      >Войти</Link>
    </form>
    
  </div>
  )
}
