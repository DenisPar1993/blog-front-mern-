import React from 'react'
import logo from '../images.jpg'
import { AiOutlineComment,AiFillEye } from "react-icons/ai"
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

export const PostItem = ({post}) => {
  console.log(post);
  return (
    <Link to={`${post._id}`}>
    <div className='mt-16'>
    <div className='mx-auto'>

       <img className='w-full object-cover max-h-96' src={logo} alt="" />

    </div>
    <div className='flex justify-between mt-3'>
     <div className='text-xs'>{post.username}</div>
     <div className='text-xs'>
     <Moment date={post.createdAt} format='D MMM YYYY' />
     </div>
    </div>
    <div className='mt-5'> 
      {post.title}
    </div>
    <div className='break-all mt-2 text-sm'>
     {post.text}
    </div>
    <div className='flex gap-10 mb-3'>
       <div  className='flex items-center gap-1'>
        <AiFillEye />
        <span>{post.views}</span>
       </div>
       <div className='flex items-center gap-1'>
        <AiOutlineComment />
        <span>0</span>
       </div>
    </div>

    </div >
    </Link>
  )
}
