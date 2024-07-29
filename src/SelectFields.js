import { FormControl, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { addErrorf } from './Utils'
import ErrorMsg from './ErrorMsg'

export default function SelectFields({label,control,name,errors}) {
  return (
    <FormControl  fullWidth sx={{mb:"8px"}}>
        <Controller control={control} name={name} render={({field})=>(
        <TextField {...field} {...addErrorf(errors[name])} label={label} variant="outlined" select>
            <MenuItem value=''>None</MenuItem>
            <MenuItem value='IN' >INDIA</MenuItem>
            <MenuItem value='RS' >RUSSIA</MenuItem>
        </TextField>
        )}/>
        {errors[name]?<ErrorMsg message={errors[name].message}/>:null}
    </FormControl>
  )
}
