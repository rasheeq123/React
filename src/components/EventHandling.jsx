import React from 'react'

const EventHandling = () => {
  return (
    <div className='container'>
        <h1 className="text-center">Event Handling</h1>
        <hr />
        <h4>Click Event</h4>
        <button className="btn btn-primary" onClick={()=>{alert('button was clicked')}} >Click Here</button>  {/* callback function kab or kitti baar cal hoga hme nhi pta */}
        <input type="text" className='form-control
         mt-4' onChange={(e)=>{console.log (e.target.value)}} />  {/* koi bhi value nikaaal skte h iske through i.e jo bhi user enter kr raha and onnchange mtlb jab koi value change krenge*/}
         {/* <input type="color" className='mt-4'  onChange={(e)=>{console.log(e.target.value);}}/> rating wagera krne ke lie , so that uski value change hoti dikhe */}
        <input type="color" className='mt-4'  onChange={(e)=>{document.body.style.backgroundColor=e.target.value}}/> {/* same background clr usi clr ka hoga jaise jaise change krenge */}
        <input type="range" name='' id='' />

    </div>
  )
}

export default EventHandling