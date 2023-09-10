import React, { useRef, useState } from 'react'

const Chat_Sir = () => {

    const inputRef= useRef(null);
    const [messageList, setmessageList] = useState([
        {text:'hello', sent:false},
        {text:'padha do', sent:true},
        {text:'nikal lo', sent:false},
        {text:'aacha bhai ok', sent:true},
        {text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit impedit necessitatibus commodi, ea delectus iste, soluta nulla aperiam libero quas amet at tempore pariatur adipisci culpa veritatis earum eligendi! Distinctio natus harum, incidunt qui hic sapiente doloribus nulla voluptas fugiat animi vero fugit possimus totam explicabo cumque laboriosam, ullam reiciendis?', sent:true},
        {text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit impedit necessitatibus commodi, ea delectus iste, soluta nulla aperiam libero quas amet at tempore pariatur adipisci culpa veritatis earum eligendi! Distinctio natus harum, incidunt qui hic sapiente doloribus nulla voluptas fugiat animi vero fugit possimus totam explicabo cumque laboriosam, ullam reiciendis?', sent:false}
    ]);
    

    const sendMessage=()=>{
        const messageText= inputRef.current.value;
        console.log(messageText);
        setmessageList([...messageList, {text: messageText,sent:true}])



        inputRef.current.value='';

    }




  return (
    <div>
        <di className="container py-5">
            <h2 className='mb-4 text-center'> My messenger</h2>
            <div className="card">
                <div className="card-body chat-container">
                    {
                        messageList.map((message)=>{
                            return <div className={ `msg ${message.sent ? `msg.sent`: `msg-rec`}`}>
                                {message.text}
                            </div>
                        })
                    }

                </div>
                <div className="card-footer">
                    <div className="input-group">
                        <input type="text" className='form-control'ref={inputRef}/>
                        <button onClick={sendMessage} className='btn btn-dark'>send</button>
                    </div>
                </div>
            </div>
        </di>
    </div>
  )
}

export default Chat_Sir