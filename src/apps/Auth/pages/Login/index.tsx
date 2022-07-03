import React from "react";
import { Forms } from "../../../../components/Forms";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { BiPlanet } from 'react-icons/bi'
import { useLogin } from '../../hooks/useLogin';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchemaLogin } from '../validation';
import { IInputLogin } from '../../../../types';
import { useAuth } from '../../../../providers/useAuth';
import Cookies from 'js-cookie';

export const Login: React.FunctionComponent = () => {
  const { actions } = useLogin();
  const auth = useAuth();
  
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(validationSchemaLogin)
  });

  const resetFields = React.useCallback( (data:IInputLogin) => reset(data) , [reset] );
  
  const LoginWithEmailAndPassword = React.useCallback((data:IInputLogin | any) => {
    Cookies.set('username' , data.username)

    actions.post(data)
      .then(res => {
        resetFields(data);

        const { data: loginData } = res;

        auth.setToken(loginData.auth_token);
      });
  },[actions , resetFields , auth]);

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
                <h1 className="text-light mb-4" style={{fontSize:'2rem'}}>Authorization</h1>
                <div className="d-flex justify-content-center">
                  <BiPlanet  
                    style={
                      {fontSize:'2.5rem',
                       color:'#0dcaf0', 
                       boxShadow:'0 0 5px #0dcaf0'
                      }
                    }
                  />
                </div>
                <form onSubmit={handleSubmit(LoginWithEmailAndPassword)}>
                  <Forms.Divider>
                    <Forms.TextInput 
                      type="text"
                      placeholder="Username"
                      {...register('username')}
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
                    title={'LOGIN'}
                  />
                </form>

                <div className="mt-3">
                  <p className="text-light">
                    Don't have an account ? 
                  </p>
                  <Link to="/auth/register" style={{ color:'#0dcaf0', textShadow:'0 0 5px #0dcaf0'}}>  REGISTER</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};