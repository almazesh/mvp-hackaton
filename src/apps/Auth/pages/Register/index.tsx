import React from "react";
import { Forms } from "../../../../components/Forms";
import {GiAstronautHelmet} from 'react-icons/gi'
import { useRegister } from '../../hooks/useRegister';

export const Register: React.FunctionComponent = () => {
  const [email , setEmail] = React.useState<object | string>('')
  const [password , setPassword] = React.useState<object | string>('')
  const [name , setName] = React.useState<object | string>('')
  const [file , setFile] = React.useState<object | string>('')

  const { actions } = useRegister()
  
  const registerWithEmailAndPassword = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    actions.post(email , password , name , file)
  }

  return (
    <React.Fragment>
      <section className="container">
        <div 
          className="d-flex justify-content-center align-items-center" 
          style={{height:'100vh'}}
        >
          <div className="col-12 col-sm-12 col-lg-6 col-xl-3">
            <div className="card  p-5" style={{background:'#211F29'}}>
              <div className="card-head text-center">
                <h1 className="text-light mb-4" style={{fontSize:'2rem'}}>Registration</h1>
                <div className="d-flex justify-content-center">
                  <GiAstronautHelmet className="text-light" style={{fontSize:'2.5rem'}}/>
                </div>
                <form onSubmit={registerWithEmailAndPassword}>
                  <Forms.Divider>
                    <Forms.TextInput 
                      type="email"
                      placeholder="Email"
                      setInputsValue={setEmail}
                    />
                  </Forms.Divider>
                  
                  <Forms.Divider>
                    <Forms.TextInput 
                      type="password"
                      placeholder="Password"
                      setInputsValue={setPassword}
                    />
                  </Forms.Divider>

                  <Forms.Divider>
                    <Forms.TextInput 
                      type="text"
                      placeholder="Username"
                      setInputsValue={setName}
                    />
                  </Forms.Divider>

                  <Forms.Divider>
                    <Forms.TextInput 
                      type="text"
                      placeholder="Photo"
                      setInputsValue={setFile}
                    />
                  </Forms.Divider>

                  <Forms.ButtonSubmit 
                    title={'REGISTER'}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}