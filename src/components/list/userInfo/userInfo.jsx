import './userInfo.css'
import {useUserStore} from '../../../lib/userStore'
const UserInfo = () => {

  const {theCurrentUser , getUserInfo , loading}= useUserStore()
  return (
    <div className='userInfo'>
        <div className="user">
            <img src={theCurrentUser.avatar || "/avatar.png"} alt="" />
            <h2>{theCurrentUser.username}</h2>
        </div>
        <div className="icons">
            <img src="/more.png" alt="" />
            <img src="/video.png" alt="" />
            <img src="/edit.png" alt="" />
        </div>
    </div>
  )
}

export default UserInfo