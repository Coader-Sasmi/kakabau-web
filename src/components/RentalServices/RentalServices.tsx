// // "use client";
// // import { useEffect, useState } from "react";

// // interface RentalService {
// //     id: number;
// //     title: string;
// //     url: string;
// // }

// // const RentalServices = () => {
// //     const [services, setServices] = useState<RentalService[]>([]);
// //     const [newService, setNewService] = useState({ id: "", title: "", url: "" });

// //     // Fetch rental services from API
// //     const fetchServices = async () => {
// //         const response = await fetch("/api/rental-services");
// //         const data = await response.json();
// //         setServices(data);
// //     };

// //     // Add a new rental service
// //     const addService = async () => {
// //         if (!newService.id || !newService.title || !newService.url) return alert("All fields are required");

// //         const response = await fetch("/api/rental-services", {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify({
// //                 id: Number(newService.id),
// //                 title: newService.title,
// //                 url: newService.url,
// //             }),
// //         });

// //         const data = await response.json();
// //         if (response.ok) {
// //             setServices((prev) => [...prev, data.newService]);
// //             setNewService({ id: "", title: "", url: "" });
// //         }
// //     };

// //     useEffect(() => {
// //         fetchServices();
// //     }, []);

// //     return (
// //         <div className="p-6">
// //             <h2 className="text-2xl font-bold mb-4">Rental Services</h2>
            
// //             <ul className="mb-4">
// //                 {services.map((service) => (
// //                     <li key={service.id} className="p-2 border-b">
// //                         {service.title} - <a href={service.url} className="text-blue-600">{service.url}</a>
// //                     </li>
// //                 ))}
// //             </ul>

// //             {/* Add New Service Form */}
// //             <div className="p-4 border rounded">
// //                 <h3 className="text-lg font-semibold mb-2">Add New Service</h3>
// //                 <input
// //                     type="number"
// //                     placeholder="ID"
// //                     value={newService.id}
// //                     onChange={(e) => setNewService({ ...newService, id: e.target.value })}
// //                     className="border p-2 mr-2"
// //                 />
// //                 <input
// //                     type="text"
// //                     placeholder="Title"
// //                     value={newService.title}
// //                     onChange={(e) => setNewService({ ...newService, title: e.target.value })}
// //                     className="border p-2 mr-2"
// //                 />
// //                 <input
// //                     type="text"
// //                     placeholder="URL"
// //                     value={newService.url}
// //                     onChange={(e) => setNewService({ ...newService, url: e.target.value })}
// //                     className="border p-2 mr-2"
// //                 />
// //                 <button onClick={addService} className="bg-blue-500 text-white px-4 py-2 rounded">
// //                     Add Service
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default RentalServices;






// import  { useEffect, useState } from 'react';

// export default function RentalServices() {
// const url = 'https://jsonplaceholder.typicode.com/todos'
// const [data, setData] = useState(null)

// useEffect(()=> {
//     const fetchData = async () => {
//         fetch(url)
//         .then((response) => response.json())
//         .then((result) => {
//             setData(result)
//         })
//     }
//     fetchData()
// } ,[])

// // if(!data) return null 
// //   return (
// //     <div>
// //       {
// //         data.map((item,itemIndex) => {
// //             ...
// //         })
// //       }
// //     </div>
// //   )

// return { data }
// }
