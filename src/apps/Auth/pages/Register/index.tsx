import React from "react";
import { Forms } from "../../../../components/Forms";
import {GiAstronautHelmet} from 'react-icons/gi'
import { useRegister } from '../../hooks/useRegister';
import { useForm } from "react-hook-form";
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { IInputRegister } from '../../../../types';
import { FormsValidations } from '../../../../components/Forms/FormsValidations/export';

export const Register: React.FunctionComponent = () => {
  const { actions } = useRegister();
  const navigate = useNavigate();
  const [isLoading , setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid , errors } ,
    setError,
  } = useForm({
    mode: "onBlur"
  });

  const registerWithEmailAndPassword = React.useCallback( async (datas:IInputRegister | any) => {
    try{
      setIsLoading(true);

      await actions.post(datas)
        .then(res => {
          reset();

          const { data: registerData } = res;

          Cookies.set('userID' , registerData.id);

          registerData && navigate('/auth/login/');

        });
      } catch (e) {
      
      } finally {
        setIsLoading(false)
      }

  }, [actions , navigate , reset]);

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
                <h1 className="text-light text-center mb-4" style={{fontSize:'2rem'}}>Registration</h1>
                <div className="d-flex justify-content-center">
                  <GiAstronautHelmet 
                    style={
                      {
                        fontSize:'2.5rem',
                        color:'#0dcaf0', 
                      }
                    }
                  />
                </div>
                <form onSubmit={handleSubmit(registerWithEmailAndPassword)}>
                  <Forms.Divider>
                    <Forms.TextInput 
                      labels={ errors?.username ? errors.username.message : ''}
                      className='form-control p-3  mt-2'
                      type="text"
                      handleValid={isValid}
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
                      className='form-control p-3  mt-2'
                      handleValid={isValid}
                      type="text"
                      labels={ errors?.role ? errors.role.message : ''}
                      placeholder="Role *"
                      {...register('role',{
                        required: FormsValidations.requiredMessage.required,
                        minLength: 2,
                        maxLength: 255 
                    })}
                    />
                  </Forms.Divider>

                  <Forms.Divider>
                    <Forms.TextInput 
                      className='form-control p-3 mt-2'
                      labels={ errors?.password ? errors.password.message : ''}
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
                    title={'REGISTER'}
                    validBtn={isValid}
                    classStyle="btn-info"
                  />

                </form>

                <div className="mt-3 text-center">
                  <p className="text-light">
                    Already have an account ? 
                  </p>
                  <Link 
                    to="/auth/login" 
                    style={{ 
                      color:'#0dcaf0', 
                      textShadow:'0 0 5px #0dcaf0'
                    }}
                  > 
                    LOGIN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
};