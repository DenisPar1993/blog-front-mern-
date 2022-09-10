import React from 'react'
import { useParams } from 'react-router-dom'
import logo from '../images.jpg'
import { useState,useCallback,useEffect } from 'react'
import { AiOutlineComment,AiFillEye } from "react-icons/ai"
import Moment from 'react-moment'
import axios from '../service/axios'


export const PostPage = () => {
 const [post,setPost]=useState(null)
 const params=useParams()
console.log(params.id);
const getPost =useCallback( async()=>{
  const {data}= axios.get(`posts/${params.id}`)
  console.log(data);
},[params.id])

useEffect(()=>{
getPost()
},[])

if(!post){
  return (
    <div className='max-w-[900px] mx-auto text-center mt-12'>
      Постов нет
  </div>
  )
}
  return (
    <div className='max-w-[900px] mx-auto '>
      <button>Назад</button>
      <div className='flex justify-between gap-8'>

        <div className='basis-3/4'>
        <div className='mt-16'>
    <div className='mx-auto'>

       <img className='w-full object-cover max-h-96' src={logo} alt="" />

    </div>
    <div className='flex justify-between mt-3'>
     <div className='text-xs'>username</div>
     <div className='text-xs'>
     12.123.12
     </div>
    </div>
    <div className='mt-5'> 
      title
    </div>
    <div className='break-all mt-2 text-sm'>
     text
    </div>
    <div className='flex gap-10 mb-3'>
       <div  className='flex items-center gap-1'>
        <AiFillEye />
        <span>0</span>
       </div>
       <div className='flex items-center gap-1'>
        <AiOutlineComment />
        <span>0</span>
       </div>
    </div>

    </div >

        </div>
        <div className='basis-1/4'>
        <div>COMMENTS</div>
        </div>
            
      </div>
    </div>
  )
}
