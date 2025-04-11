// "use client"
// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// export default function Test() {
//   // const [data, setData] = useState([])
//   //   const { isLoading, data, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
//   // if (error){
//   //   return <div>Error: {error.message}</div>
//   // } else if (isLoading) {
//   //   return <div>Loading...</div>
//   // } else {

//   // console.log("Fetched data:", data);
//   const url = 'https://jsonplaceholder.typicode.com/posts'
//   interface Post {
//     title: string;
//     body: string;
//   }
  
//   const [data, setData] = useState<Post[] | null>(null);
//  const [openIndex, setOpenIndex] = useState<number | null>(null);

 
//   // const [openMenu, setOpenMenu] = useState<boolean>(false);

//   // const toggleMenu = () => {
//   //   setOpenMenu(!openMenu);
//   // };


// useEffect(() => {
//     const fetchData = async () => {
//       fetch(url)
//         .then((response) => response.json())
//         .then((result) => {
//           setData(result)
//         })
//       }
//     fetchData()
//   }, [])
// if(!data) return null
//   console.log("data1:", data);

  

//   const toggleBody = (index:number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   }

//     return (
//       <>
//           <div className='grid grid-cols-3 gap-10 '>
//           {data && data.map((item, itemIndex) => (
//             <div key={itemIndex} className='flex  gap-2 justify-center items-center '>
//               <div className='text-2xl font-bold w-80 h-80 gap-5  bg-white shadow-black shadow-md rounded-lg p-5 flex flex-col justify-center items-center' onClick={() => toggleBody(itemIndex)}>
//                 {item.title}
//               </div>
//               {openIndex === itemIndex && (
//             <p className="text-xl w-80 bg-white p-4 rounded shadow">{item.body}</p>
//           )}
//           </div>
//           ))
//           }
//         </div> 
// </>
//     )}

