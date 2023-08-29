import React from 'react' //rafce type krke enter

const Home = () => {
  return (
    <div>
        <h1>Welcome to Home components</h1>
        <h2 style={{ color:'Red', fontSize: 40 }}>Using inline css</h2>
        <input type="text" />
        <br />
        <hr />
        <h3 className='myclass'>Using Classname</h3>
    </div>
  )
}

export default Home