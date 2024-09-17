import { useState } from "react"
import "./ChatList.css"
import Adduser from "./addUser/adduser"

const ChatList = () => {
  const [addMode, SetAddMode] = useState(false)

  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img 
        src={addMode ? "./minus.png" : "./plus.png"} 
        alt="" 
        className="add" 
        onClick={() => SetAddMode((prev) => !prev)}
        />
      </div>
      <div className="items">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Mmeyene Aloysius</span>
          <p>hello</p>
        </div>
      </div>
      <div className="items">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Mmeyene Aloysius</span>
          <p>hello</p>
        </div>
      </div>
      <div className="items">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Mmeyene Aloysius</span>
          <p>hello</p>
        </div>
      </div>
      <div className="items">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Mmeyene Aloysius</span>
          <p>hello</p>
        </div>
      </div>
      <div className="items">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Mmeyene Aloysius</span>
          <p>hello</p>
        </div>
      </div>
      <div className="items">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Mmeyene Aloysius</span>
          <p>hello</p>
        </div>
      </div>
      <div className="items">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Mmeyene Aloysius</span>
          <p>hello</p>
        </div>
      </div>
      <div className="items">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Mmeyene Aloysius</span>
          <p>hello</p>
        </div>
      </div>
      <div className="items">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Mmeyene Aloysius</span>
          <p>hello</p>
        </div>
      </div>
      {addMode && <Adduser/>}
    </div>
  )
}

export default ChatList