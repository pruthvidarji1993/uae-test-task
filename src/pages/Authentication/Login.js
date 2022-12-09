import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  FormGroup,
  InputGroup,
  InputGroupText,
  Label,
} from 'reactstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { validateEmail } from '../../constants/validationFunctions';
import { loginSchema } from '../../constants/validations';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth/loginActions';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //States
  const [visiblePassword, setVisiblePassword] = useState(false);

  const viewPassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const handleSubmit = (value) => {
    dispatch(login(value, navigate))
  };

  return (
    <>
      <Helmet>
        <title>{t('login.headTitle')}</title>
      </Helmet>
      <Container fluid>
        <Card className='main-div mb-0 highlight-card'>
          <CardHeader>
            <CardTitle className='mb-0'>{t('login.cardTitleLogin')}</CardTitle>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <FormGroup className='form-group'>
                    <Label for='username'>
                      {t('login.emailLabel')} <span className='required'>*</span>
                    </Label>
                    <Field
                      as='input'
                      type='email'
                      name='email'
                      autoComplete='off'
                      validate={validateEmail}
                      id='login-email'
                      placeholder={t('login.emailPlaceholder')}
                      className={`form-control form-group   ${errors.email && touched.email && 'is-invalid'
                        }`}
                    />
                    {errors.email && touched.email ? (
                      <span className='text-danger error-msg'>{errors?.email}</span>
                    ) : null}
                  </FormGroup>
                  <FormGroup className='form-group'>
                    <Label for='password'>
                      {t('login.passwordLabel')} <span className='required'>*</span>
                    </Label>
                    <InputGroup>
                      <Field
                        as='input'
                        name='password'
                        type={visiblePassword ? 'text' : 'password'}
                        className={`form-control form-group  border-right-0' ${errors.password && touched.password && 'is-invalid'
                          }`}
                        placeholder={t('login.passwordPlaceholder')}
                      />
                      <InputGroupText>
                        {visiblePassword ? (
                          <FaEye
                            size='15'
                            className='pointer'
                            onClick={viewPassword}
                          />
                        ) : (
                          <FaEyeSlash
                            size='15'
                            className='pointer'
                            onClick={viewPassword}
                          />
                        )}
                      </InputGroupText>
                    </InputGroup>
                    {errors.password && touched.password ? (
                      <span className='text-danger error-msg'>
                        {errors?.password}
                      </span>
                    ) : null}
                  </FormGroup>
                  <Button
                    type='submit'
                    className='btn-cu-lg'
                    color='primary'
                    disabled={errors.password || errors.email}
                  >
                    {t('login.submitButton')}
                  </Button>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Login;
