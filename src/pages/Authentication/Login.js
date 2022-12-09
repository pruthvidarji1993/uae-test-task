import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  InputGroup,
  InputGroupText,
  Label,
  Row,
  Col,
} from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { validateEmail } from "../../constants/validationFunctions";
import { loginSchema } from "../../constants/validations";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth/loginActions";
import Infographic from "../../assets/images/login-infographic.svg";
import { toast } from "react-toastify";

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
    dispatch(login(value, navigate));
  };

  return (
    <>
      <Helmet>
        <title>{t("login.headTitle")}</title>
      </Helmet>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={5} md={5} sm={6} xs={8}>
            <img src={Infographic} className="img-fluid" alt="images" />
          </Col>
          <Col lg={5} md={8}>
            <Card className="main-div mb-0 highlight-card">
              <CardHeader>
                <CardTitle>{t("login.cardTitleLogin")}</CardTitle>
              </CardHeader>
              <CardBody>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={loginSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="form-group mb20">
                        <Label for="username">
                          {t("login.emailLabel")}{" "}
                          <span className="required">*</span>
                        </Label>
                        <Field
                          as="input"
                          type="email"
                          name="email"
                          autoComplete="off"
                          validate={validateEmail}
                          id="login-email"
                          placeholder={t("login.emailPlaceholder")}
                          className={`form-control form-group   ${
                            errors.email && touched.email && "is-invalid"
                          }`}
                        />
                        {errors.email && touched.email ? (
                          <span className="text-danger error-msg">
                            {errors?.email}
                          </span>
                        ) : null}
                      </div>
                      <div className="form-group mb20">
                        <Label for="password">
                          {t("login.passwordLabel")}{" "}
                          <span className="required">*</span>
                        </Label>
                        <InputGroup>
                          <Field
                            as="input"
                            name="password"
                            type={visiblePassword ? "text" : "password"}
                            className={`form-control form-group  border-right-0' ${
                              errors.password &&
                              touched.password &&
                              "is-invalid"
                            }`}
                            placeholder={t("login.passwordPlaceholder")}
                          />
                          <InputGroupText>
                            {visiblePassword ? (
                              <FaEye
                                size="15"
                                className="pointer"
                                onClick={viewPassword}
                              />
                            ) : (
                              <FaEyeSlash
                                size="15"
                                className="pointer"
                                onClick={viewPassword}
                              />
                            )}
                          </InputGroupText>
                        </InputGroup>
                        {errors.password && touched.password ? (
                          <span className="text-danger error-msg">
                            {errors?.password}
                          </span>
                        ) : null}
                      </div>
                      <Button
                        type="submit"
                        className="btn-cu-lg"
                        color="primary"
                        block
                        disabled={errors.password || errors.email}
                      >
                        {t("login.submitButton")}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
