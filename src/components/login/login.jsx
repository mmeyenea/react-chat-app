import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify" 
import {auth, db} from "../../lib/firebase"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import upload from "../../lib/uplaodsFile"


const Login = () => {
    const [avatar,setAvatar] = useState({
        file:null,
        url:""
    })
    const [loading,setLoading] = useState(false);
    const handleAvatar = e =>{
        if (e.target.files[0]) {
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
    };

    const handleRegister = async  (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(e.target);

        const  { username, email, Password } = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth,email,Password)

            const imgUrl = await upload(avatar.file)

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar:imgUrl,
                id: res.user.uid,
                blocked: [],
              });

            await setDoc(doc(db, "userChats", res.user.uid), {
                chats: [],
              });

              toast.success('sign in successful')
        } catch (err) {
            console.log(err.message);
            
        }finally{
            setLoading(false)
        }

    };
    const handleLogin =async (e) =>{
        e.preventDefault()

        setLoading(true)
        const formData = new FormData(e.target);

        const  { email, Password } = Object.fromEntries(formData);

        try {
            await signInWithEmailAndPassword(auth , email , Password)
        } catch (err) {
            console.log(err);
            toast.error(err.message)
            
        }finally{
            setLoading(false)
        }


    }

  return (
    <div className='login'>
        <div className="item">
            <h2>Welcome Back,</h2>
            <form onSubmit={handleLogin}>
                <input type="text" name="Email" placeholder="Email" />
                <input type="password" name="Password" placeholder="Password" />
                <button disabled={loading}>{loading ? "loading " : "Sign in"}</button>
            </form>
        </div>
        <div className="seperator"></div>
        <div className="item">
            <h2>Create An Account</h2>
        <form onSubmit={handleRegister}>
                <label htmlFor="file">
                    <img src={avatar.url || "/avatar.png"} alt="" />Upload an image
                </label>
                <input type="file" id="file" style={{display:'none'}} onChange={handleAvatar}/>
                <input type="text" placeholder="Username" name="username" />
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="Password" placeholder="Password" />
                <button disabled={loading} >{loading ? "loading " : "Sign up"}</button>
            </form>
        </div>
    </div>
  )
}

export default Login