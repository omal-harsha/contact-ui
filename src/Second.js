import React,{useEffect,useState} from 'react'

export const Second = () => {

const [backendData, setBackendData] =  useState([{}])
    // useEffect(() => {

    //     fetch("/api").then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             setBackendData(data)
    //         }
    //     ) 
    // },[])


    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('/api');
            const data = await response.json();
            setBackendData(data);
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchData();
      }, []);
  return (
    <div>
        { (typeof backendData.users === 'undefined') ?  (
            <p>Loading..</p>
        ) : (
        backendData.users.map((user, i) => {
            return <li key={i}> {user}</li>
        }))
    }
    </div>
  )
}
