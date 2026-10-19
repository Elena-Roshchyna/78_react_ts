export interface EmployeeData {
  name: string;
  surname: string;
  age: number;
  jobPosition?: string;
}

export interface EmployeeCardProps {
  employee: EmployeeData;
}
