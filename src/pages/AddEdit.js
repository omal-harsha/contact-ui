import React, {useState,useEffect} from 'react'
import { useNavigate,useParams, Link } from 'react-router-dom'
import axios from 'axios'
import {toast} from "react-toastify"



export const AddEdit = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [detail, setDetail] = useState("")

    const navigate = useNavigate();
    const {id} = useParams()

    useEffect( ()=> {
        axios.get(`https://contactadd-api.herokuapp.com/api/get/${id}`)
        .then((resp) =>{
            
            setDetail(resp.data.name)
            console.log(detail)
        })
    },[id])

    function handSubmit() {
        if(!name || !email || !contact){
            toast.error("please provide value into each input field")
        }else{
            axios.post("https://contactadd-api.herokuapp.com/api/post",{
                name: name,
                email: email,
                contact: contact
            }).then(() => {
               
            }).catch((err) => toast.error(err.response.data));
            toast.success("Contact added successfully")
            setTimeout(() => {
                navigate("/")
            }, 500);
        }
    }
  return (
    <div>
        <div> 
            <h1 className='flex justify-center mt-52 text-xl font-bold text-gray-500'>Add Contact</h1>
            
        <form onSubmit={handSubmit} className='flex flex-row w-max justify-center items-center mt-2 mx-auto bg-slate-400 px-10 py-10 rounded-xl'>
            <div className='flex flex-col space-y-8 mt-2'>
                <label className='mr-7 font-bold'>Name</label>
                <label className='mr-7 font-bold'>Email</label>
                <label className='mr-7 font-bold'>Contact</label>
            
            </div>
            <div className='flex flex-col space-y-3'>
            <input type='text' name='name' value={name || ""} onChange={(event) => setName(event.target.value)} placeholder='Enter the name' className='border-2 w-72 px-2 py-2 rounded-lg'/>
            <input type='text' name='email' value={email || ""} placeholder='Enter the email' onChange={(event) => setEmail(event.target.value)} className='border-2 w-72 px-2 py-2 rounded-lg'/>
            <input type='text' name='telephone' value={contact || ""} placeholder='Enter the telephone' onChange={(event) => setContact(event.target.value)} className='border-2 w-72 px-2 py-2 rounded-lg'/>
            </div>
            
        </form>
        <button className='flex mx-auto bg-green-900 text-white w-80 mt-6 justify-center py-2 rounded-lg font-bold text-xl hover:scale-110 duration-150 ease-in-out hover:shadow-2xl' onClick={(event) => {event.preventDefault(); handSubmit()}}>Save</button>
        <Link to="/">
        <button className='flex mx-auto bg-blue-400 text-white w-80 mt-6 justify-center py-2 rounded-lg font-bold text-xl hover:scale-110 duration-150 ease-in-out hover:shadow-2xl' >Go back</button>
        </Link>
        </div>
    </div>
  )
}
