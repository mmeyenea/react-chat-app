import { auth } from '../../lib/firebase'
import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="/avatar.png" alt="" />
        <h2>Mmeyene Aloysius</h2>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>shared photos</span>
            <img src="/arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItems">
              <div className="photoDetails">
              <img src="/1725477549706.jpg" alt=""/>
              <span>1122122__2024_jpg </span>
              </div>
              <img src="/download.png" alt="" className='icons' />
            </div>
            <div className="photoItems">
              <div className="photoDetails">
              <img src="/1725477549706.jpg" alt=""/>
              <span>1122122__2024_jpg </span>
              </div>
              <img src="/download.png" alt="" className='icons' />
            </div>
            <div className="photoItems">
              <div className="photoDetails">
              <img src="/1725477549706.jpg" alt=""/>
              <span>1122122__2024_jpg </span>
              </div>
              <img src="/download.png" alt="" className='icons' />
            </div>
            <div className="photoItems">
              <div className="photoDetails">
              <img src="/1725477549706.jpg" alt=""/>
              <span>1122122__2024_jpg </span>
              </div>
              <img src="/download.png" alt="" className='icons' />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block user</button>
        <button className='logOut' onClick={()=>auth.signOut()}>Log Out</button>
      </div>
    </div>
  )
}

export default Detail