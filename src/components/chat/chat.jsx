import { useEffect, useRef, useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [open , setOpen] = useState(false)
  const [text , setText] = useState("")
  
  const endRef = useRef(null)
  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior: "smooth"})
  })

  const handleEmoji = (e) =>{
    setText((prev) => prev + e.emoji)
    setOpen(false)
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="" />
          <div className="txt">
          <span>Mmeyene Aloysius</span>
          <p>Lorem ipsum dolor sit amet .</p>
          </div>
        </div>
        <div className="icons">
          <img src="/phone.png" alt="" />
          <img src="/video.png" alt="" />
          <img src="/info.png" alt=""  />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit maxime esse rem eligendi dignissimos et, officia libero ipsum sunt consequuntur sint repellendus voluptatibus sit sequi tenetur, laudantium impedit assumenda!
            </p>
            <span>just now</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit maxime esse rem eligendi dignissimos et, officia libero ipsum sunt consequuntur sint repellendus voluptatibus sit sequi tenetur, laudantium impedit assumenda!
            </p>
            <span>just now</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit maxime esse rem eligendi dignissimos et, officia libero ipsum sunt consequuntur sint repellendus voluptatibus sit sequi tenetur, laudantium impedit assumenda!
            </p>
            <span>just now</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit maxime esse rem eligendi dignissimos et, officia libero ipsum sunt consequuntur sint repellendus voluptatibus sit sequi tenetur, laudantium impedit assumenda!
            </p>
            <span>just now</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit maxime esse rem eligendi dignissimos et, officia libero ipsum sunt consequuntur sint repellendus voluptatibus sit sequi tenetur, laudantium impedit assumenda!
            </p>
            <span>just now</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit maxime esse rem eligendi dignissimos et, officia libero ipsum sunt consequuntur sint repellendus voluptatibus sit sequi tenetur, laudantium impedit assumenda!
            </p>
            <span>just now</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Hello Boss
            </p>
            <span>just now</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit maxime esse rem eligendi dignissimos et, officia libero ipsum sunt consequuntur sint repellendus voluptatibus sit sequi tenetur, laudantium impedit assumenda!
            </p>
            <span>just now</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit maxime esse rem eligendi dignissimos et, officia libero ipsum sunt consequuntur sint repellendus voluptatibus sit sequi tenetur, laudantium impedit assumenda!
            </p>
            <span>just now</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <img src="/1725477549706.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <span>just now</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
          <input 
          type="text"
           placeholder='Type a message...'
           value={text} 
           onChange={e=>setText(e.target.value)}
            />
          <div className="emoji">
            <img src="/emoji.png" alt="" onClick={()=> setOpen((prev) => !prev)} />
            <div className="picker" >
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
          </div>
          <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat