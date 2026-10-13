import { useState } from "react";
import EmployeeCard, { type EmployeeData } from "../../Components/EmployeeCard/EmployeeCard";
import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
import { Lesson11Wrapper, TitleH2, FormWrapper } from "./styles";


function Lesson11 (){

    const [employee, setEmployee] = useState<EmployeeData | null>(null);
    const handleCreateEmployee = (data: EmployeeData) => {
        setEmployee(data);
    };


    return(
        <Lesson11Wrapper>
        
        <TitleH2>Create Employee</TitleH2>

        <FormWrapper>
        <EmployeeForm onCreateEmployee={handleCreateEmployee} />
        {employee && <EmployeeCard employee={employee} />}
            </FormWrapper>
            
        </Lesson11Wrapper>
        
        
    );
}
export default Lesson11;





