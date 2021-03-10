import React from 'react';
import { useFormik } from 'formik';

const FormikExample = () => {
  const formik = useFormik({
    initialValues: {
      items: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.values.items);
  return (
    <div>
      {['apple', 'banana', 'orange'].map((item) => (
        <div key={item}>
          <input
            type="checkbox"
            name="items"
            id={item}
            value={item}
            onChange={formik.handleChange}
          />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default FormikExample;
