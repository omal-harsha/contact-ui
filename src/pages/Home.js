import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-toastify'
import App from './../App';

export const Home = () => {


    
    const [data,setData] = useState([])
    const loadData = async() => {
        const response = await axios.get('https://contactadd-api.herokuapp.com/api/get')
        setData(response.data)
         
    }

    useEffect(() => {
        loadData();
    },[])
  
    const deleteContact = (id) => {

      if(window.confirm("Are you sure you want to delete that contact"))
      {
        axios.delete(`https://contactadd-api.herokuapp.com/api/remove/${id}`)
        toast.success("Contact Deleted Successfully")
        setTimeout(() => {
          loadData()
        }, 500);
      }
    }

  return (
    <div className='flex justify-center mt-20 flex-col w-max m-auto'>
        <Link to={`/addContact/`}>
                    <button className='bg-blue-400 px-3 py-1 rounded-md text-white font-bold mb-3'>Add</button>
        </Link>
        <table>
          <thead>
            <tr className='bg-green-800 text-white '>
              <th className='px-5 py-2'>No.</th>
              <th className='px-5 py-2'>Name</th>
              <th className='px-5 py-2'>Email</th>
              <th className='px-5 py-2'>Contact</th>
              <th className='px-5 py-2'>Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {data.map((item,index) =>{
              return(
              <tr key={item.id} className=''>
                <th className='px-5'>{index+1}</th>
                <td className='px-5 py-2'>{item.name}</td>
                <td className='px-5 py-2'>{item.email}</td>
                <td className='px-5 py-2'>{item.contact}</td>
                <td className='space-x-3'>
                  <Link to={`/update/${item.id}`}>
                    <button className='bg-blue-400 px-3 py-1 rounded-md text-white font-bold'>Edit</button>
                  </Link>
                  <button onClick={()=> deleteContact(item.id)} className='bg-red-800 px-3 py-1 rounded-md text-white font-bold'>Delete</button>
                  <Link to={`/view/${item.id}`}>
                    <button className='bg-gray-500 px-3 py-1 rounded-md text-white font-bold'>View</button>
                  </Link>
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>
    </div>
  )
}
