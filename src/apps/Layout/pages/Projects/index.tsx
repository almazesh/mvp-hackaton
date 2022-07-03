import React from 'react'
import styles from './index.module.scss'
import { Forms } from '../../../../components/Forms/';
import { useForm } from 'react-hook-form';

interface IProjectProps {
  toggleCreateMenu: boolean
}

export const Projects: React.FunctionComponent<IProjectProps> = ({toggleCreateMenu}: IProjectProps) => {

  const {
    reset,
    handleSubmit,
    register
  } = useForm()

  return (
    <section className={styles.project_container}>
      <h3 className='h4'>Добавить проект</h3>
      <div className='me-5 mt-5'>
        <form>
          <Forms.Divider>
            <Forms.TextInput 
              type="text"
              placeholder='Caption'
              {...register('caption')}
            />
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              type="text"
              placeholder='Start'
              {...register('start')}
            />
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              type="text"
              placeholder='Redline'
              {...register('redline')}
            />
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              type="text"
              placeholder='Deadline'
              {...register('deadline')}
            />
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              type="text"
              placeholder='Status'
              {...register('status')}
            />
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              type="text"
              placeholder='Developers'
              {...register('developers')}
            />
          </Forms.Divider>

          <Forms.Divider>
            <Forms.ButtonSubmit 
              title='Добавить'
            />
          </Forms.Divider>
        </form>
      </div>
    </section>
  )
}

