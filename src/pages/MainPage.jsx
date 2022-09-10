import React from 'react'
import { PostItem } from '../components/PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllPosts } from '../store/slices/PostSlice'
import { PopularPost } from '../components/PopularPost'

export const MainPage = () => {
  const dispatch= useDispatch()
  const posts= useSelector(state=>state.posts.posts)
  const popularPosts= useSelector(state=>state.posts.popularPost)
console.log(popularPosts);
 useEffect(()=>{
     dispatch(getAllPosts())
  },[])

  if(!posts.length){
    return (
      <div className='max-w-[900px] mx-auto text-center mt-12'>
        Постов нет
    </div>
    )
  }
  return (
    <div className='max-w-[900px] mx-auto'>
      <div className='flex justify-between gap-8'>
        <div className='basis-4/5'>
          {posts.map((item,ind)=>{
           return <PostItem post={item} key={ind}/>
             })}
        </div>
        <div className='mt-8 basis-1/5'>
          {popularPosts.map((item,ind)=>{
            return <PopularPost post={item} key={ind} />
          })}
        </div>
     
      </div>
      
      

    </div>
  )
}
