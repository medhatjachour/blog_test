import { PostInterface } from '@/types'
import Link from 'next/link';
import React from 'react'
interface PostProps {

    post: PostInterface;
  
  }

const Post =  ({ post }: PostProps) => {
  return (
    <div className=' w-2/3 m-auto px-4 py-3 bg-gray-400 text-black rounded-lg'>
           <Link className='font-bold text-lg' href={`/posts/${post.id}`}>{post.title}</Link>
        <p>{post.body}</p>
    </div>
  )
}

export default Post