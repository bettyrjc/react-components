import {useState} from 'react';

export const useForm = <T extends Object>(initState: T) => {
  const [values, setValues] = useState(initState);

  const handleChange = <K extends Object>(value: K, field: string) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  return {
    ...values,
    values,
    handleChange,
  };
};
