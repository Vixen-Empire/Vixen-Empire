import React, { useState, useEffect } from 'react'
import { useAuth } from '../Context/Auth'
import TextFeild from '@material-ui/core/TextField'
import formSchema from  '../assets/utiles/formSchema'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import * as Yup from 'yup'
import {Grid, Paper,Button,withStyles} from '@material-ui/core'
import '../css/sign-up.css'
import { useHistory } from 'react-router'


function SignUp() {
    const {signUp} = useAuth()
    const [loading,setLoading]=useState(false)
    const [newUser,setNewUser] = useState({
      username:'',
      name:'',
      email:'',
      password:'',
      passwordConfirm:''
    })
    const [touched, setTouched] = useState({password: false, confirm: false});
    const [visable, setVisable] = useState(false)
    const [formError, setError] = useState(newUser)
    const [disabled, setDisabled] = useState(true);
    const history = useHistory

    const onInputChange = (e) => {
      const { name, value } = e.target;
  
      setNewUser({ ...newUser, [name]: value });
      setTouched({...touched, [name]: true});
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email= newUser.email
      const password= newUser.password
      console.log(email,password)
      const {error}= await signUp({email,password})
      setLoading(true)
      if(error){
        alert('error in sign up')
      }else{
        history.push('./den')
      }
    };
  
    useEffect(() => {
      Yup
        .reach(formSchema)
        .validate(newUser, { abortEarly: false })
        .then(() => {
          setError({});
        })
        .catch((err) => {
          const errors = {};
          err.inner.forEach(error => {
            if(touched[error.path]) errors[error.path] = error.message;
          })
          setError(errors);
        });
  
      formSchema.isValid(newUser).then(valid => setDisabled(!valid));
    }, [newUser]);
    //styles
    const SubmitButton = withStyles((theme) => ({
        root: {
          
          backgroundColor: '#16044a',
          '&:hover': {
            backgroundColor: '#8d5dfc',
          },
 
        },
      }))(Button);

    

    return (
        <div className="sign-up-container">
        <Grid id="form-container" container>
            <Paper >
            <h1>Sign Up For A New Adventure</h1>
                <form onSubmit={handleSubmit} className="sign-up-form">
                    <div className="input-feilds">
                      {formError.name
                    ?<TextFeild required 
                    label="Name" 
                    name="name"
                    type='text'
                    value={newUser.name} 
                    error={Boolean(formError.name)}
                    helperText={`${formError.name}` }
                    onChange={onInputChange}
                     />
                     :<TextFeild required 
                     label="Name" 
                     name="name"
                     value={newUser.name} 
                     onChange={onInputChange}
                     type='text'
                      />
                    }
                    {formError.email
                    ?<TextFeild required
                     label="Email"
                     name="email"
                     value={newUser.email}
                     type='email'
                     onChange={onInputChange}
                     error={Boolean(formError.email)}
                     helperText={`${formError.email}`}
                      />
                    :<TextFeild required
                    label="Email"
                    name="email"
                    value={newUser.email}
                    type='email'
                    onChange={onInputChange}
                    
                     />
                    }
                    {formError.password
                    ?<TextFeild
                    required 
                    label="Password" 
                    name="password"
                    type='password'
                    onChange={onInputChange}
                    value={newUser.password} 
                    error={Boolean(formError.password)}
                    helperText={`${formError.password}`}
                   
                    />
                    :<TextFeild
                    required 
                    label="Password" 
                    name="password"
                    type='password'
                    onChange={onInputChange}
                    value={newUser.password} 
                    icon={visable ? VisibilityIcon : VisibilityOffIcon}
                    />
                  }
                    {formError.passwordConfirm
                    ?<TextFeild 
                    required 
                    label="Comfirm Password" 
                    name="passwordConfirm"
                    type='password'
                    onChange={onInputChange}
                    value={newUser.passwordConfirm} 
                    error={Boolean(formError.passwordConfirm)}
                    helperText={`${formError.passwordConfirm}`}
                    
                    />
                    :<TextFeild 
                    required 
                    label="Comfirm Password" 
                    name="passwordConfirm"
                    type='password'
                    onChange={onInputChange}
                    value={newUser.passwordConfirm} 
                    
                    />
                   }
                    </div>
                    {formError.username
                    ?<TextFeild style={{marginTop:"1rem"}} 
                    onChange={onInputChange}
                    name="username"
                    type='text'
                    value={newUser.username} 
                    error
                    helperText={`${formError.username}`}
                    fullWidth required label="Username" />
                    :<TextFeild style={{marginTop:"1rem"}} 
                    onChange={onInputChange}
                    name="username"
                    value={newUser.username} 
                    type='text'
                    fullWidth required label="Username" />
                    }
                    
                    <div className="tos-notice">       
                      <p>By <em>Starting Your Journey</em> you are accepting <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a> you must be 13yrs or older to play</p>
                    </div>  
                    <div id="signUp-submit">
                      { disabled 
                      ? <SubmitButton variant="contained" color="primary" type="submit" disabled >Start Your Journey
                      </SubmitButton>
                      : <SubmitButton  variant="contained" color="primary" type="submit" >{!loading ?'Start Your Journey' :'Loading'}
                      </SubmitButton>}
                   
                    </div>
                </form>
            </Paper>
        </Grid>  
        </div>
    )
}

export default SignUp
