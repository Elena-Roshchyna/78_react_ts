import { useFormik } from "formik";
import Input from "../Input/Input";
import Button from "../Button/Button";
import * as Yup from "yup";

import type { EmployeeData } from "../EmployeeCard/EmployeeCard";
import { EmployeeFormContainer} from "./styles";



export interface EmployeeFormValues {
    name: string;
    surname: string;
    age: string;
    jobPosition: string;
}

interface EmployeeFormProps {
    onCreateEmployee: (data: EmployeeData) => void;
}


function EmployeeForm({ onCreateEmployee }: EmployeeFormProps) {


const schema = Yup.object().shape({
    name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters" )
    .max(50, "Name must be at most 50 characters"),

    surname: Yup.string()
    .required("Surname is required")
    .max(15, "Surname must be at most 15 characters" ),


    age: Yup.number()
    .required("Age is required")
    .min(18, "Age must be at least 18")
    .max(80, "Age must be at most 80"),

    jobPosition: Yup.string()
    .max(30, "Job position must be at most 30 characters")


});


const formik = useFormik<EmployeeFormValues>({
    initialValues: {
        name: "",
        surname: "",
        age: "",
        jobPosition: "",
    },
    validationSchema: schema,
    validateOnChange: false,

// Если данные не прошли валидацию, submit не должен происходить. 
// Когда форма прошла успешную валидацию, запишем это в setEmployee
    onSubmit: (values) => {

        onCreateEmployee({
        
            name: values.name,
            surname: values.surname,
            age: Number(values.age),
           jobPosition: values.jobPosition ? values.jobPosition : undefined, // Ошибка: через 'er'
        });
    },
});


return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>


{/* Инпуты связываются с Formik ... передаем value, o6nChange и error */}

 <Input
        name="name"
        label="Name*"
        placeholder="Enter your name"
        id="name_id"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
    />
    

<Input
        name="surname"
        label="Surname*"
        placeholder="Enter your surname"
        id="surname_id"
        value={formik.values.surname}
        onChange={formik.handleChange}
        error={formik.errors.surname}
    />


    
    <Input
        name="age"
        label="Age*"
        type="number"
        placeholder="Enter your age"
        id="age_id"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
    />


<Input
        name="jobPosition"
        label="Job Position"
        placeholder="Enter your job Position"
        id="jobPosition_id"
        value={formik.values.jobPosition}
        onChange={formik.handleChange}
        error={formik.errors.jobPosition}
    />


    <Button name="Create" type="submit"/>

    </EmployeeFormContainer>


);
}


export default EmployeeForm;



