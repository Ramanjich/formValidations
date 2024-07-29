import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import ErrorMsg from './ErrorMsg'

export default function CheckBoxf({errors,name,control}) {
  return (
    <>
    <Controller name={name} control={control} render={(field)=>(
    <FormControlLabel errors={errors} control={<Checkbox required {...field}/>} label="I agree to your terms and conditions" />
  )}/>
  {errors[name]?<ErrorMsg message={errors[name].message}/>:null}
    </>
    
    
  )
}
