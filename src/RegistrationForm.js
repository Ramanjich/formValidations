import React from 'react'
import {Box,Avatar, Typography,InputAdornment,  Button, Paper} from '@mui/material'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TextFields from './TextFields';
import SelectFields from './SelectFields';
import { useForm} from "react-hook-form" 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { pawdRegExp, phoneRegExp, stringRegExp } from './Utils';
import CheckBoxf from './CheckBoxf';

const schema = yup
  .object({
    fullName: yup.string().required("Full name is required").matches(stringRegExp,"It containes only alphabets"),
    email: yup.string().required("Email is required").email(),
    mobile: yup.string().required("mobile is required").matches(phoneRegExp,"Phone number is not valid"),
    country: yup.string().required("Country is required"),
    password: yup.string().required("Password is required").matches(pawdRegExp,"Must Contain 8 Characters, one uppercase, one lowercase,one number and special case character"),
    confirmPassword: yup.string().oneOf([yup.ref('password')],'Password must be match'),

    
  })
  
export default function RegistrationForm() {
  const{handleSubmit,control,formState:{errors},reset}=useForm({
    defaultValues: {
      fullName: "",
      
      email:'',
      country:'',
      mobile:'',
      password:'',
      confirmPassword:'',
      privacy:false,
    },
    resolver: yupResolver(schema),
    mode:'onTouched',
  });
  const onSubmit=(data)=>{
    console.log(data);
    reset()
  }
  return (
    <Paper elevation={4} sx={{
      padding:"10px",
      margin:'50px',
      width:'100%',
      borderColor:"red"
    }}>
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        mt:'1rem',
        alignItems:"center"
    }}>
        <Avatar sx={{m:0.5,bgcolor:"secondary.main",width: 24, height: 24}}>
<HowToRegIcon sx={{fontSize:"15px"}}/>
        </Avatar>
        <Typography variant='h1' sx={{fontSize:"15px"}}>Sign up</Typography>
        <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} sx={{width:"100%",mt:"5px", display:"flex",
        flexDirection:"column",
        
        alignItems:"center"}}>
          <TextFields label='Full Name' control={control} name='fullName' errors={errors}/>
          <TextFields label='Email' control={control} name='email' errors={errors}/>
          <TextFields errors={errors} control={control} name='mobile' label='Mobile' inputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,type:"number"
          }}/>
          <SelectFields label='Country' control={control} name='country' errors={errors}/>
          <TextFields label='Password' control={control} name='password' errors={errors}/>
          <TextFields label='Confirm Password' control={control} name='confirmPassword' errors={errors}/>
          <CheckBoxf errors={errors} name='privacy' control={control}/>
          <Button fullWidth variant='contained' sx={{fontSize:"14px",mb:"3px",mt:"3px"}} type='submit'>
            Submit
          </Button>
        </Box>
    </Box>
    </Paper>
  )
}
