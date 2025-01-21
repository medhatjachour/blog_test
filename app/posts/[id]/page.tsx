'use client'
import { PostInterface } from '@/types';
import { useParams } from 'next/navigation';

import React from 'react'
interface PostProps {
    post: PostInterface;
  }
const page = async ({ post }: PostProps) => {
    const { id } = useParams();
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const JsonResult = await result.json();

  
  return (
    <div className=' w-2/3 m-auto px-4 py-3 bg-gray-400 text-black rounded-lg'>
           <h2 className='font-bold text-lg' >{JsonResult.title}</h2>
        <p>{JsonResult.body}</p>
    </div>
  )
}

export default page