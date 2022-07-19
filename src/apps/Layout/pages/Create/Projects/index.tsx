import React from 'react'
import { Forms } from '../../../../../components/Forms';
import { useForm } from 'react-hook-form';
import { allEndpoints } from '../../../../../api';
import { FormsValidations } from '../../../../../components/Forms/FormsValidations/export';
import { useAuth } from '../../../../../providers/useAuth';



export const CreateProjects:React.FunctionComponent = () => { 
  const { 
    users, 
    setAlert, 
    setAlertTitle, 
    setReRenderer,
    goToMain 
  } = useAuth()

  const [devs , setDevs] = React.useState([{}])

  const {
    reset,
    handleSubmit,
    register,
    formState: {errors , isValid},
  } = useForm({
    mode: "onBlur"
  });

  const handleCreate = React.useCallback((datas:any) => {
    const newData = {
      ...datas,
      developers: [1 , 2 , 3]
    }

    allEndpoints.endPoints.handleCreateProject(newData)
      .then(res => {
        reset()
        setReRenderer('work')
        setAlert(true)
        setAlertTitle('Успешно создано!')
        goToMain('')
    })
    
  }, [reset , setAlert , setAlertTitle , setReRenderer]);

  const setUpTheDevs = ( e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
      setDevs(prev => {
        return [
          ...prev,
          {devID: e.target.id}
        ]
      })
    }
  }

  return (
    <div>
      <div className='me-5 '>
        <form onSubmit={handleSubmit(handleCreate)}>
          <Forms.Divider>
            <Forms.TextInput 
              handleValid={isValid}
              type="text"
              className={`form-control p-3 mt-1`}
              labels={errors?.caption && errors.caption.message}
              placeholder='Caption'
              {...register('caption', {
                  required: FormsValidations.requiredMessage.required,
                  minLength: FormsValidations.minLengthMessage,
                  maxLength: {
                    value:15,
                    message: 'Максимум 15 символов'
                  } 
              })}
            />
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              type="date"
              className='form-control p-3 mt-2'
              labels='Start the project'
              handleValid={isValid}
              placeholder='Start'
              {...register('start', { 
                required: FormsValidations.requiredMessage.required,
                minLength: FormsValidations.minLengthMessage,
                maxLength: 255 
               })}
            />
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              labels='Redline the project'
              handleValid={isValid}
              type="date"
              className='form-control p-3 mt-2'
              placeholder='Redline'
              {...register('redline', { 
                required: FormsValidations.requiredMessage.required,
                minLength: FormsValidations.minLengthMessage,
                maxLength: 255 
               })}
            />
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              handleValid={isValid}
              type="date"
              className='form-control p-3 mt-2'
              labels='Deadline the project'
              placeholder='Deadline'
              {...register('deadline', { 
                required: FormsValidations.requiredMessage.required,
                minLength: FormsValidations.minLengthMessage,
                maxLength: 255 
               })}
            />
          </Forms.Divider>
          
          <Forms.Divider>
            <Forms.Select 
              label="Choose status"
              {...register('status', {
                required: FormsValidations.requiredMessage.required,
                minLength: FormsValidations.minLengthMessage,
                maxLength: 255
              })}
              handleValid={isValid}
            />
          </Forms.Divider>

          <Forms.Divider>
            <Forms.ChooseDevCheckbox 
              usersProps={users}
              label="Set up the participants for project"
              {...register('developers')}
              getParticipants={setUpTheDevs}
            />
          </Forms.Divider>

          <Forms.Divider> 
            <Forms.ButtonSubmit 
              title='Добавить проект'
              classStyle="btn-secondary"
              validBtn={isValid}
            />
          </Forms.Divider>
        </form>
      </div>
    </div>
  )
};
