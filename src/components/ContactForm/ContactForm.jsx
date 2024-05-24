import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

const validationShame = Yup.object().shape({
  name: Yup.string().min(3, "To short").max(50, "To long"),
  number: Yup.string().min(3, "To short").max(50, "To long"),
});
export default function ContactForm({ updateContact }) {
  const handleSubmit = (values, actions) => {
    updateContact({ ...values, id: nanoid() }); 
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationShame}
      >
        <Form className={style.form}>
          <div className={style.labelWrapper}>
            <label>
              Name
              <br />
              <Field type="text" name="name" />
              <ErrorMessage
                className={style.eror}
                name="name"
                component="span"
              />
            </label>
          </div>

          <div className={style.labelWrapper}>
            <label>
              Number
              <br />
              <Field className={style.input} type="text" name="number" />
              <ErrorMessage
                className={style.eror}
                name="number"
                component="span"
              />
            </label>
          </div>
          <button className={style}>Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
