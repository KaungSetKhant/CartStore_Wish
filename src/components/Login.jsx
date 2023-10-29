// import React, { useEffect, useState } from 'react'
// // import LoginTrue from './LoginTrue'
// // import LoginFalse from './LoginFalse'
// // import reactLogo from "../svg/logo.svg";
// // import { useSelector } from "react-redux";
// // import { Link } from "react-router-dom";

// // import {auth,google} from '../config/fire'
// // import {signInWithPopup, signOut} from 'firebase/auth'
// // import Products from './Products';

// const Login = () => {
//     //   const [isLogin,setIsLogin] = useState(false)
//     //   const [user,setUser] = useState(null)
      
//     //   const login = async(provider) => {
//     //     const result = await signInWithPopup(auth,provider)
//     //     setUser(result.user)
//     //     setIsLogin(true)
//     //     console.log(result)
//     //   }

//     //   const logout = async() => {
//     //     const result = await signOut(auth)
//     //     setUser(null)
//     //     setIsLogin(false)
//     //     console.log(result)
//     //   }

//       const LoginFalse = () => {
//         return (
//             <div>
//             <div>
//                 Please Login
//             </div>
//             <div>
//                 <button onClick={() => login(google)}>Login with Google</button>
//                 <button onClick={login}>Login with Facebook</button>
//                 <button onClick={login}>Login with Twitter</button>
//                 <button onClick={login}>Login with GitHub</button>
//             </div>
//         </div>
//         )
//       }

//       const LoginTrue = () => {
//         return (
//         //     <div>
//         //     Welcome
//         //     <img src={user.photoURL} />
//         //     <p>Welcome {user.displayName}! Your account {user.email} has been login in at {user.metadata.lastSignInTime}</p>
//         //     <button onClick={logout}>Logout</button>
//         // </div>
//          <>
        
         
//          </>   
//         )
//       }
//     return (
//         <div>
//             {isLogin && user ? <LoginTrue/> : <LoginFalse/>}
//         </div>
//     )
// }

// export default Login
