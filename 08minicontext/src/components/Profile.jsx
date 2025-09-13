import React from 'react'
import {useContext} from 'react'
import userContext from '../context/userContext'

function Profile(){
    const {setUser} = useContext(userContext)
    const {user} = useContext(userContext)
    if(!user){
        return(<div>Please Login</div>)
    }else{
        return(
        <div>
            Profile
            {user.username}
        </div>
    )
    }
    
}

export default Profile;