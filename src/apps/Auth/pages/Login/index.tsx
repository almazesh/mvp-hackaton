import React from "react";
import { Forms } from "../../../../components/Forms";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { BiPlanet } from 'react-icons/bi'
import { useLogin } from '../../hooks/useLogin';
import { IInputLogin } from '../../../../types';
import { useAuth } from '../../../../providers/useAuth';
import Cookies from 'js-cookie';
import { FormsValidations } from '../../../../components/Forms/FormsValidations/export';

export const Login: React.FunctionComponent = () => {
  const { actions } = useLogin();
  const auth = useAuth();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid , errors }
  } = useForm({
    mode: "onBlur"
  });

  const resetFields = React.useCallback( (data:IInputLogin) => reset(data) , [reset] );
  
  const LoginWithEmailAndPassword = React.useCallback((data:IInputLogin | any) => {
    Cookies.set('username' , data.username);

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
              <div className="card-head">
                <h1 className="text-light text-center mb-4" style={{fontSize:'2rem'}}>Authorization</h1>
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
                      handleValid={isValid}
                      type="text"
                      className='form-control p-3 mt-2'
                      labels={ errors?.username ? errors.username.message : ''}
                      placeholder="Username"
                      {...register('username',{
                        required: FormsValidations.requiredMessage.required,
                        minLength: FormsValidations.minLengthMessage,
                        maxLength: 255 
                    })}
                    />
                  </Forms.Divider>
                  
                  <Forms.Divider>
                    <Forms.TextInput 
                      labels={ errors?.password ? errors.password.message : ''}
                      className='form-control p-3 mt-2'
                      handleValid={isValid}
                      type="password"
                      placeholder="Password"
                      {...register('password',{
                        required: FormsValidations.requiredMessage.required,
                        minLength: FormsValidations.minLengthMessage,
                        maxLength: 255 
                    })}
                    />
                  </Forms.Divider>

                  <Forms.ButtonSubmit 
                    title={'LOGIN'}
                    validBtn={isValid}
                    classStyle="btn-info"
                  />
                </form>

                <div className="mt-3 text-center">
                  <p className="text-light">
                    Don't have an account ? 
                  </p>
                  <Link 
                    to="/auth/register" 
                    style={{ 
                      color:'#0dcaf0', 
                      textShadow:'0 0 5px #0dcaf0'
                    }}
                  > 
                    REGISTER
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};