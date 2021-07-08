import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {selectUser,login} from '../assets/redux/userSlice'
import TextFeild from '@material-ui/core/TextField'
import formSchema from  '../assets/utiles/formSchema'

import * as Yup from 'yup'
import {Checkbox,Grid, Paper, FormControlLabel,Button,withStyles} from '@material-ui/core'
import '../css/sign-up.css'


function SignUp() {
    const user = useSelector(selectUser)
    const [newUser,setNewUser] = useState(user)
    const [formError, setError] = useState(formSchema)
    const [valid, setIsValid] = useState(false)

    const dispatch = useDispatch()
    
    const history = useHistory()



    const onInputChange = (e)=>{
        const name = e.target.name
        const value = e.target.value

        setNewUser({
           ...newUser,
           [name]:value
        })
        Yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => {
          setError({
            ...formError,
            [name]: ''
          })
          if(value === ''){
            setError({
              ...formError,
              [name]: ''
            })
          }
        })
       
        .catch(err => {
          setError({
            ...formError,
            [name]: err.errors[0] 
            
          })
          console.log(formError.password)
        })

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(formSchema.isValid(newUser))
        {
          dispatch(login(newUser))
          setIsValid(true)
         console.log(user)
        }else{
          return
        }

    }
        //Validation
        useEffect(() => {
          formSchema.isValid(newUser)
            .then((valid)=>
              setIsValid(true)
            )

        }, [newUser, setIsValid])


    //styles
    const SubmitButton = withStyles((theme) => ({
        root: {
          
          backgroundColor: '#16044a',
          '&:hover': {
            backgroundColor: '#8d5dfc',
          },
 
        },
      }))(Button);
   
    const CheckTerms = withStyles((theme)=>({
       root:{
           
           color:'#16044a',
           '&:hover':{
               backgroundColor: 'rgba(141, 93, 252,0.125)'
           },
           '&$checked':{
            color:'#16044a'
           },
       }
    }))((props) => <Checkbox color="default" {...props} />)

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
                    value={newUser.name} 
                    error={Boolean(formError.name)}
                    helperText={`${formError.name}` }
                    onChange={onInputChange}
                    helpertext={formError.name}
                     />
                     :<TextFeild required 
                     label="Name" 
                     name="name"
                     value={newUser.name} 
                     onChange={onInputChange}
                      />
                    }
                    {formError.email
                    ?<TextFeild required
                     label="Email"
                     name="email"
                     onChange={onInputChange}
                     error={Boolean(formError.email)}
                     helperText={`${formError.email}`}
                      />
                    :<TextFeild required
                    label="Email"
                    name="email"
                    onChange={onInputChange}
                    type="email"
                     />
                    }
                    {formError.password
                    ?<TextFeild
                    required 
                    label="Password" 
                    name="password"
                    onChange={onInputChange}
                    value={newUser.password} 
                    error={Boolean(formError.password)}
                    helperText={`${formError.password}`}
                    type="password" 
                    />
                    :<TextFeild
                    required 
                    label="Password" 
                    name="password"
                    onChange={onInputChange}
                    value={newUser.password} 
                    type="password" 
                    />
                  }
                    { formError.confirm
                    ?<TextFeild required 
                    label="Comfirm Password" 
                    name="confirm"
                    error={Boolean(formError.confirm)}
                    helperText={`${formError.confirm}`}
                    value={newUser.confirm} 
                    onChange={onInputChange}
                    type="password"
                    />
                    :<TextFeild required 
                    label="Comfirm Password" 
                    name="confirm"
                    value={newUser.confirm} 
                    onChange={onInputChange}
                    type="password"
                    />
                   }
                    </div>
                    {formError.username
                    ?<TextFeild style={{marginTop:"1rem"}} 
                    onChange={onInputChange}
                    name="username"
                    value={newUser.username} 
                    error
                    helperText={`${formError.username}`}
                    fullWidth required label="Username" />
                    :<TextFeild style={{marginTop:"1rem"}} 
                    onChange={onInputChange}
                    name="username"
                    value={newUser.username} 
                    fullWidth required label="Username" />
                    }
                    
                    <div className="check-box">       
                    <FormControlLabel
                            control={<CheckTerms  name="terms_of_service"  />}
                            label="Terms of Service"
                            helpertext="Terms of service must be accepted"
                    />
                    <FormControlLabel
                            control={<CheckTerms  name="privacy_policy" />}
                            label="Privacy Notice"
                            helpertext="Privacy Notice must be accepted"
                    />
                    </div>  
                    <div id="signUp-submit">
                      { valid 
                      ? <SubmitButton variant="contained" color="primary" type="submit" disabled >Start Your Journey
                      </SubmitButton>
                      : <SubmitButton  variant="contained" color="primary" type="submit" >Start Your Journey
                      </SubmitButton>}
                   
                    </div>
                </form>
            </Paper>
        </Grid>  
        </div>
    )
}

export default SignUp
