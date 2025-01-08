import { createContext } from "react";

const EmployeeContext = createContext({
  name: "",
  age: 30,
  city: "",
});

export default EmployeeContext;
