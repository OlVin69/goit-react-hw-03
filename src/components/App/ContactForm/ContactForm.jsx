import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';

import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field className={css.field} type="text" name="Name" id={nameFieldId} />
        <ErrorMessage name="Name" as="span" />
        <label htmlFor={numberFieldId}>Number</label>
        <Field
          className={css.field}
          type="text"
          name="Number"
          id={numberFieldId}
        />
        <ErrorMessage name="Number" as="span" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

// export default function ContactForm({ onAdd }) {
//   const handleSubmit = e => {
//     e.preventDefault();
//     onAdd({
//       id: nanoid(),
//       name: e.target.elements.Name.value,
//       number: e.target.elements.Number.value,
//     });
//     e.target.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input className={css.field} type="text" name="Name" />
//       <input className={css.field} type="text" name="Number" />
//       <button className={css.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }
