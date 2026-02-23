"use client";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "./style.module.css";
import { useState } from 'react';
import { login, LoginRequest } from '@/services/AuthService';
import { aesEncrypt } from '@/utils/app.util';

const initialValues: LoginRequest = {
    username: '',
    password: '',
    sysCode: 'SYS',
    onlyExtend: false
}

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Username must be greater than 2 digits.')
        .required('Inter_Email!!!!'),
    password: Yup.string()
        .min(8, 'Password Too Short, At Least 8 chars')
        .required('Password!!!!!!'),
});

export default function Login() {

    const [showPassword, SetShowPassword] = useState(false);

    const handleshowPassword = () => {

        SetShowPassword(!showPassword);
    }

    return (
        <main className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Login Account</h1>  
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, action) => {

                        console.log("Submit Action >>> ");

                        const data = aesEncrypt(values);

                        login({ data });
                    }}
                    >
                    <Form className={styles.form}>
                        {/* First Name */}
                        {/* <div className={styles.inputWrapper}>
                            <label className={styles.label} htmlFor='first_name'>First Name</label>
                            <Field type="text" name="first_name" id="first_name" className={styles.input} placeholder="Thin" />
                            <ErrorMessage name="first_name" component="section" className={styles.error} />
                        </div> */}
                        {/* End */}

                         {/* Last Name */}
                        {/* <div className={styles.inputWrapper}>
                            <label className={styles.label} htmlFor='last_name'>Last Name</label>
                            <Field type="text" name="last_name" id="last_name" className={styles.input} placeholder="Sokthyreak" />
                            <ErrorMessage name="last_name" component="section" className={styles.error} />
                        </div> */}
                        {/* End */}

                        {/* Email */}
                        <div className={styles.inputWrapper}>
                            <label className={styles.label} htmlFor='username'>E-mail</label>
                            <Field type="text" name="username" id="username" className={styles.input} placeholder="Reak@example.com" />
                            <ErrorMessage name="username" component="div" className={styles.error} />
                        </div>
                        {/* End */}

                        {/* Password */} 
                            <div className={styles.inputWrapper}>
                                <label className={styles.label} htmlFor='password'>Password</label>
                                <div className="relative" style={{ position: 'relative' }}>
                                    <Field 
                                        type={showPassword ? "text" : "password"} 
                                        name="password" 
                                        id="password" 
                                        className={styles.input} 

                                        placeholder="*******"
                                        style={{ paddingRight: '40px' }}
                                    /> 
                                    {/* {showPassword ? (
                                        <IoMdEye 
                                            onClick={handleshowPassword}
                                            style={{ 
                                                position: 'absolute', 
                                                right: '12px', 
                                                top: '50%', 
                                                transform: 'translateY(-50%)',
                                                cursor: 'pointer',
                                                color: '#666' 
                                            }}
                                        />
                                    ) : (
                                        <FaRegEyeSlash 
                                            onClick={handleshowPassword}
                                            style={{ 
                                                position: 'absolute', 
                                                right: '12px', 
                                                top: '50%', 
                                                transform: 'translateY(-50%)',
                                                cursor: 'pointer',
                                                color: '#666' 
                                            }} 
                                        />
                                    )} */}
                                </div>
                                {/* <ErrorMessage name="password1" component="section" className={styles.error} /> */}
                            </div>
                        {/* End */}

                        {/* Cmf Password */}
                        {/* <div className={styles.inputWrapper}>
                            <label className={styles.label} htmlFor='password2'>Confirm Password</label>
                            <Field type="password" name="password2" id="password2" className={styles.input} placeholder="*******" />
                            <ErrorMessage name="password2" component="section" className={styles.error} />
                        </div> */}
                        {/* End */}

                        <button type="submit" className={styles.button}>
                            Submit
                        </button>
                    </Form>
                </Formik>
            </div>
        </main>
    )
}