import { FormControl, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { addErrorf } from './Utils'
import ErrorMsg from './ErrorMsg'

const TextFields=({label,inputProps,control,name,errors})=> {
  return (
    <FormControl  fullWidth sx={{mb:"8px"}}>
        <Controller name={name} control={control} 
        render={({field})=>(<TextField {...field} {...addErrorf(errors[name])} label={label} variant="outlined" required InputProps={inputProps} />)}
        />
        {errors[name]?<ErrorMsg message={errors[name].message}/>:null}
    </FormControl>
  )
}
export default  TextFields