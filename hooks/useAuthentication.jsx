import{db} from '../firebase/firebaseConfig'
import { async } from "@firebase/util";
import { getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,updateProfile,signOut } from "firebase/auth";
import { useState, useEffect } from "react";

export const useAuthentication=()=>{
    const[error, setError]=useState(null)
    const[loading, setLoading]=useState(null)

    //Clean up
    const[cancelled, setCancelled]=useState(false)

    const auth=getAuth()


    function checkIfIsCancelled(){
        if(cancelled)
        return
    }

    const createUser=async(data)=>{
        checkIfIsCancelled()
        setLoading(null)
        setError(null)

        try {
          const {user}= await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
            )  
            updateProfile(user,{
                displayName:data.displayName
            })
            return user
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage
            if(error.message.includes("password")){
                systemErrorMessage=("Password needs at least 6 characters")
            }
           else if(error.message.includes ("email-already") ){

            systemErrorMessage=("User already exists")

            }

            else{
                systemErrorMessage=("An error occurred. Please, try later")
            }
            
            setError(systemErrorMessage)
        }
        setLoading(false)
    }

    //logout

    const logout=()=>{
        checkIfIsCancelled()
        signOut(auth)
    }

    useEffect(()=>{
        return()=>setCancelled(true)
    },[])

    return{
        auth,createUser,error,loading,logout
    }
}