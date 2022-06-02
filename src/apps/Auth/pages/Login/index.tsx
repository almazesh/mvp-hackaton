import React from "react";
import { useLogin } from '../../hooks/useLogin';


export const Login: React.FunctionComponent = () => {
  
  const { actions } = useLogin()

  const signInWithGoogleProvider = (e:React.MouseEvent<HTMLImageElement , MouseEvent>) => {
    e.preventDefault()
    actions.post()
  }
  return (
    <React.Fragment>
      <div 
        className="d-flex justify-content-center align-items-center" 
        style={{height:'100vh'}}
      >
       <div className="col-12 col-sm-12 col-lg-6 col-xl-3">
          <div className="card  p-5">
            <div className="card-head text-center">
              <h4>Registration</h4>
              <div className="mt-5 d-flex justify-content-center ">
                <img 
                  onClick={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) => signInWithGoogleProvider(e)}
                  className="w-50" src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" 
                  alt="" 
                  style={{cursor:'pointer'}}
                />
              </div>
            </div>
          </div>
       </div>
      </div>
    </React.Fragment>
  )
}