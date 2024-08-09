// create your App component here

import  { useEffect, useState } from 'react'
 function App(){
  const [image, setImage] = useState(null)
    // fetch data
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(data=>setImage(data.message))
    }, [])

    if(!image){
        return (<p>Loading...</p>)
    }

    return (
    <div className='App'>
      <p>Here's a lovely Dog for you:</p>
      <img src={image} alt="A Random Dog" style={{ width: '400px', height: 'auto', borderRadius:"5px" }} />
    </div>
    )

 }
 export default App
