"use client"
import { items } from '@/utils/RentalServices'
import React from 'react'
import useFetch from 'react-fetch-hook'

export default function Test() {
    const { isLoading, data, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
  if (error){
    return <div>Error: {error.message}</div>
  } else if (isLoading) {
    return <div>Loading...</div>
  } else {

  console.log("Fetched data:", data);

    return (
      <ul>
        {
            data && data.map((posts:any) =>(
                <li key={posts.id}>
                     {posts.id} {posts.title}
                </li>
            ))
        }
      </ul>

        // <ul>
        // {
        //     Array.isArray(data) && data.map((posts: any) => (
        //     <li key={posts.id}>
        //         {posts.title} {posts.id}
        //     </li>
        //     ))
        // }
        // </ul>

    )
  }
}
