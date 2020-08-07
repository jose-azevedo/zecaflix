import { useState } from 'react';

function useForm(initialValues) {
    const [categoryValues, setCategoryValues] = useState(initialValues);
    
    function handleChange(eventInfo) {
      setCategoryValues({
        ...categoryValues,
        [eventInfo.target.getAttribute('name')]: eventInfo.target.value,
      });
    }
    function clearForm() {
      setCategoryValues(initialValues);
    }
    
    return {
      clearForm,
      handleChange,
      categoryValues
    }
  }

export default useForm;