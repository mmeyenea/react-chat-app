import './addUser.css'

const Adduser = () => {
  return (
    <div className='addUser'>
        <form action="">
          <input type="text" placeholder='username' name='username' />
          <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
              <img src="/avatar.png" alt="" />
              <span>Mmeyene Aloysius</span>
            </div>
            <button>Add User</button>
        </div>
        
    </div>
  )
}

export default Adduser