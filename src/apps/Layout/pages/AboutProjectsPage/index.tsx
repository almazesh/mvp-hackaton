import React from 'react'
import { useParams } from 'react-router-dom'
import { allEndpoints } from '../../../../api';
import { Loader } from '../../../../components/Loader';


export const AboutProjectPage: React.FunctionComponent = () => {
  const { id } = useParams()  
  const [project , setProject] = React.useState(null)

  const reverseToString = String(id)

  React.useEffect(() => {
    allEndpoints.endPoints.handleGetProject(reverseToString)
      .then(res => {
        const data = res.data;

        setProject(data)
      })  
  }, [reverseToString]);
  
  if(!project) return <Loader />

  return (
    <div>AboutProjectPage</div>
  )
};
