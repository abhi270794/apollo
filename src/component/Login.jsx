import React from 'react'

export const Login =()=>{
    return(
   <>
   <div>
   <div className="register-photo">
     <div className="form-container">
       <div className="image-holder"></div>
       <form method="post">
         <h2 className="text-center">
           <strong>Sign In</strong>
         </h2>
         <div className="form-group">
           <input
             className="form-control"
             type="email"
             name="email"
             placeholder="Email"
             required
           />
         </div>
         <div className="form-group">
           <input
             className="form-control"
             type="password"
             name="password"
             placeholder="Password"
             required
           />
         </div>
         <div className="form-group">
           <div className="form-check">
             
               <input className="form-check-input" type="checkbox" />I
               agree to the license terms.
            
           </div>
         </div>
         <div className="form-group">
           <button className="btn btn-primary btn-block" type="submit">
             Sign In
           </button>
         </div>

         <div className="form-group">
           <a href="http://localhost:3001/Register">
             <span className="btn btn-primary btn-block">Sign Up</span>
           </a>
         </div>

         <a href="http://localhost:3001/" className="already">
           Click Here? Landing Page.
         </a>
       </form>
     </div>
   </div>
 </div>
   
   
   
   
   </>



    )

}