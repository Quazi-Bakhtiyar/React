import React from 'react'
import appwriteAuthServices from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  console.log("PostCard received:", {$id, title, featuredImage});
    return (
        <Link to={`/post/${$id}`}>
            <div className="rounded-xl p-4 bg-gray-100 w-full">
                {featuredImage ? (
                    <img 
                        src={appwriteAuthServices.getFilePreview(featuredImage)} 
                        alt={title}
                        className='rounded-xl' 
                    />
                ) : (
                    <div className='w-full h-40 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600'>
                        No Image
                    </div>
                )}
            </div>
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </Link>
    )
}

export default PostCard