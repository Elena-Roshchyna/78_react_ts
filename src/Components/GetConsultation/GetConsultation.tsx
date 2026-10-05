import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import Button from "../Button/Button";

import {
  GetConsultationFormComponent,
  Title,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  ErrorMessage,
  SuccessMessage,
} from "./styles";

// Структура значений  GetConsultation
export interface GetConsultationFormValues {
  email: string;
  agree: boolean;
}

function GetConsultation() {
  // State
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // схема валидации YUP
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is required")
      .email("Field has type email"),

    agree: Yup.boolean().oneOf([true], "You should agree"),
  });

  // Настройка FORMIK
  const formik = useFormik<GetConsultationFormValues>({
    initialValues: {
      email: "",
      agree: false,
    },

    //  Передаём нашу Yup-схему из Lesson10
    validationSchema: schema,
    validateOnChange: false,

    onSubmit: (values) => {
      console.log(values);
      setIsSuccess(true);
    },
  });

  // JSX разметка
  return (
    <GetConsultationFormComponent onSubmit={formik.handleSubmit}>
      <Title>Get Consultation</Title>

      {isSuccess ? (
        <SuccessMessage>Мы с Вами скоро свяжемся</SuccessMessage>
      ) : (
        <>
          <Input
            name="email"
            label="Email*"
            placeholder="Enter your email"
            id="email_consultation_id"
            value={formik.values.email} // Берём значение из formik
            onChange={formik.handleChange} // Передаём обработчик из formik
            error={formik.errors.email} // Передаём текст ошибки из formik
          />
          <CheckboxContainer>
            <Checkbox
              name="agree"
              type="checkbox"
              id="agree_consultation_id"
              checked={formik.values.agree} // Для чекбокса используется checked!
              onChange={formik.handleChange}
            />
            <CheckboxLabel htmlFor="agree_consultation_id">
              Согласен на обработку персональных данных*
            </CheckboxLabel>
          </CheckboxContainer>

          {formik.errors.agree && (
            <ErrorMessage>{formik.errors.agree}</ErrorMessage>
          )}

          <Button name="Получить консультацию" type="submit" />
        </>
      )}
    </GetConsultationFormComponent>
  );
}

export default GetConsultation;







