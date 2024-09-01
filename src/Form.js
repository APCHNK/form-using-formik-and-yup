import { useFormik } from 'formik';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const CustomForm = () => {

    const formik = useFormik({
        
    })

    return (
        <Formik
        initialValues =  {{
            name: '',
            email: '',
            amount: 0,
            currency: '',
            message: '',
            privacy: false
            }}
            validationSchema = {Yup.object({
                name: Yup.string().min(2, 'Must be 2 characters or more').required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                amount: Yup.number().min(3, 'minimum 3').max(22, 'Maximum 22').required('Required'),
                currency: Yup.string().required('Required'),
                message: Yup.string().min(10, 'Must be 10 characters or more').required('Required'),
                privacy: Yup.boolean().required('Required').oneOf([true], 'Required')
            })}
            
            onSubmit =  {values => {
                console.log(JSON.stringify(values, null, 2));
            }}
        >
            <Form className="form" onSubmit={formik.handleSubmit}>
                <h2>Отправить пожертвование</h2>
                <label htmlFor="name">Ваше имя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                <ErrorMessage name="name" className='error' component={'div'} />
                <label htmlFor="email">Ваша почта</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage name="email" className='error' component={'div'} />
                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <ErrorMessage name="amount" className='error' component={'div'} />
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select"
                    >
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage name="currency" className='error' component={'div'} />
                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="message"
                    as="textarea"
                />
                <ErrorMessage name="message" className='error' component={'div'} />
                <label className="checkbox">
                    <Field 
                        name="terms"
                        type="checkbox"
                    />
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage name="terms" className='error' component={'div'} />
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;