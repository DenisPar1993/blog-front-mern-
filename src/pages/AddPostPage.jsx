import React from 'react'
import { useState,useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux'
import { addPost } from '../store/slices/PostSlice'

export const AddPostPage = () => {
  const dispatch = useDispatch()
  const status = useSelector(state=>state.posts.status)
  const clearPost=()=>{
    setText('')
    setTitle('')
    setImage('')
  }

  useEffect(()=>{
    if(status){
      toast(status,{
        position:toast.POSITION.BOTTOM_CENTER
      })
    }
  
    },[status])

 

  const [title,setTitle]=useState('')
  const [text,setText]=useState('')
  const [image, setImage]=useState('')
  console.log(image);
  const sendPost=()=>{
    const formDate = new FormData()
    formDate.append('title',title)
    formDate.append('text',text)
    formDate.append('image',image)
    dispatch(addPost(formDate))
    setText('')
    setTitle('')
    setImage('')
  }
  return (
    <div className='flex justify-center pt-20'>
      <form 
      onSubmit={(e)=>e.preventDefault()}
      className="flex flex-col items-center w-1/3"
      >
      <label className='bg-gray-800 text-center py-2 mb-3 w-full'>
        Прикрепить файл
        <input type="file" 
        className='hidden'
        onChange={(e)=>setImage(e.target.files[0])}/>
      </label>
      <div className='flex object-cover py-2'>
                {image && (
                    <img src={URL.createObjectURL(image)} alt={image.name} />
                )}
            </div>
      <label 
      className='w-full my-3'
      htmlFor="">
        Заголовок
        <input type="text" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className='w-full bg-gray-800 rounded p-2'
        placeholder='Введите заголовок' />
      </label>
      <label 
      className='w-full'
      htmlFor="">
        Текст
        <textarea 
        type="text" 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        className='w-full bg-gray-800 rounded p-2 h-56'
        placeholder='Введите текст' />
      </label>
      <div className='flex gap-8 items-center justify-center mt-4'>
                <button
                    onClick={sendPost}
                    className='flex justify-center items-center bg-gray-800 text-xs text-white rounded-sm py-2 px-4'
                >
                    Добавить
                </button>

                <button
                   onClick={clearPost}
                    className='flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4'
                >
                    Отменить
                </button>
            </div>
      </form>
      
    </div>
  )
}
