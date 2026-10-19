// src/Components/EmployeeForm/types.ts
import type { EmployeeData } from "../EmployeeCard/EmployeeCard";

export interface EmployeeFormValues {
  name: string;
  surname: string;
  age: string;
  jobPosition: string;
}

export interface EmployeeFormProps {
  onCreateEmployee: (data: EmployeeData) => void;
}

