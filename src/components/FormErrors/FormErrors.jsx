import React from 'react';
import '../FormErrors/FormErrors.css';

const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        const formatedFieldName = fieldName.charAt(0).toUpperCase() + fieldName.substring(1);
        
        //rePassword message fix
        if(fieldName==="rePassword" || fieldName==="other"){
          return(<p key={i}>{formErrors[fieldName]}</p>);
        }
        else{
           return (<p key={i}>{formatedFieldName} {formErrors[fieldName]}</p>);
        }
               
      } else {
        return '';
      }
    })}
  </div>

export default FormErrors;