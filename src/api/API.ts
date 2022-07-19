import { instance } from '../configs';


export const endPoints = {
  handleAuthRegister: (data: Object) => instance.post('/api/users/', data),
  handleAuthLogin: (data: Object) => instance.post('/auth/token/login', data),
  handleGetProfile: () => instance.get(`/api/users/`),
  handleGetAllUser: () => instance.get(`/api/users/`),
  handleCreateProject: (data: Object) => instance.post('/api/projects/' , data),
  handleGetAllProjects: () => instance.get('/api/projects/'),
  handlePatchProjectStatus: (id: number , data: Object) => instance.patch(`/api/projects/${id}/` , data)
}


