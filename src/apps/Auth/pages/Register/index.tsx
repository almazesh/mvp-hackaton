import React from "react";
import { Forms } from "../../../../components/Forms";
import {GiAstronautHelmet} from 'react-icons/gi'
import { useRegister } from '../../hooks/useRegister';
import { useForm } from "react-hook-form";
import { useNavigate, Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchemaRegister } from '../validation';
import Cookies from 'js-cookie';
import { IInputRegister } from '../../../../types';



export const Register: React.FunctionComponent = () => {
  const { actions } = useRegister();
  const navigate = useNavigate();
  const [isLoading , setIsLoading] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(validationSchemaRegister)
  });

  const resetFields = React.useCallback(  (data: IInputRegister) => reset(data), [reset])

  const registerWithEmailAndPassword = React.useCallback( async (datas:IInputRegister | any) => {
    try{
      setIsLoading(true);

      await actions.post(datas)
      .then(res => {
        resetFields(datas);

        const { data: registerData } = res;

        Cookies.set('userID' , registerData.id)

        registerData && navigate('/auth/login/')
      });
    } catch (e) {
      
    } finally {
      setIsLoading(false)
    }
  },[actions , navigate , resetFields]);

  return (
    <React.Fragment>
      <section className="container">
        <div 
          className="d-flex justify-content-center align-items-center" 
          style={{height:'100vh'}}
        >
          <div className="col-12 col-sm-12 col-lg-6 col-xl-4">
            <div className="card  p-5" style={{background:'#211F29'}}>
              <div className="card-head text-center">
                <h1 className="text-light mb-4" style={{fontSize:'2rem'}}>Registration</h1>
                <div className="d-flex justify-content-center">
                  <GiAstronautHelmet 
                    style={
                      {fontSize:'2.5rem',
                       color:'#0dcaf0', 
                      }
                    }
                  />
                </div>
                <form onSubmit={handleSubmit(registerWithEmailAndPassword)}>
                  <Forms.Divider>
                    <Forms.TextInput 
                      type="text"
                      placeholder="Username"
                      {...register('username')}
                    />
                  </Forms.Divider>
                  
                  <Forms.Divider>
                    <Forms.TextInput 
                      type="text"
                      placeholder="Role *"
                      {...register('role')}
                    />
                  </Forms.Divider>

                  <Forms.Divider>
                    <Forms.TextInput 
                      type="password"
                      placeholder="Password"
                      {...register('password')}
                    />
                  </Forms.Divider>

                  <Forms.ButtonSubmit 
                    title={'REGISTER'}
                  />
                </form>

                <div className="mt-3">
                  <p className="text-light">
                    Already have an account ? 
                  </p>
                  <Link to="/auth/login" style={{ color:'#0dcaf0', textShadow:'0 0 5px #0dcaf0'}}>  LOGIN</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}