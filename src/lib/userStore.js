import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useUserStore = create((set) => ({
  theCurrentUser:null,
  loading:true,
  getUserInfo: async (uid)=>{
    if(!uid) return set({theCurrentUser:null, loading:false});

    try {

      const docRef = doc(db , "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({theCurrentUser:docSnap.data(),loading:false})
      }else{
        
        set({theCurrentUser:null,loading:false})
      }
      
    } catch (err) {
      console.log(err);
      return set({theCurrentUser:null, loading:false});
      
    }
    
  }
}))
