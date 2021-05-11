import axios from "axios";

const API  = axios.create({baseURL:'https://jobfinder-project.herokuapp.com'})
//const API  = axios.create({baseURL:'http://localhost:5000'})
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

export const signin = (formData) => API.post('/auth/signin',formData);
export const signup = (formData) => API.post('/auth/signup',formData);
export const googlelogin = (authData) => API.post('/auth/googlelogin',authData)
export const signincompany = (formData) => API.post('/auth/signincompany',formData);

export const userprofile = (profile) => API.post('/user/profile',profile);
export const getuserdata = (id) => API.get(`/user/profile/${id}`);
export const getjobdetails = (id) => API.get(`/job/get_job/${id}`)

export const getjobs = () => API.get('/job/get_jobs');
export const companyprofile = (profile) =>API.post('/company/profile',profile);
export const getusers = () => API.get('/user/profile');
export const postjob = (jobData)=> API.post('/job/post_job',jobData);
export const companyjobs = (id) =>API.get(`/job/get_company_jobs/${id}`);
export const getprofile = (id) => API.get(`/company/profile/${id}`);
export const relatedjobs = (value) => API.get(`/job/find_job/${value}`)

export const getapplications = (id) => API.get(`/application/get_company_application/${id}`)
export const postapplication = (formData) => API.post('/application/post_application',formData)
export const userapplications = (id) => API.get(`/application/get_user_application/${id}`)

export const referUser = (referData) => API.post('/reference/',referData);
export const getrefer = (formData) =>API.get('/reference/',formData)