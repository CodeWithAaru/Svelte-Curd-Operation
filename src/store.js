import { writable } from "svelte/store";
export const EmployeData = writable([
    {
      id: 1,
      FirstName:"Aryan",
      LastName:"Singh",
      Salary:20000

    },
    {
      id: 2,
      FirstName:"Himanshu",
      LastName:"Tyagi",
      Salary:24000
    },
    {
      id: 3,
      FirstName:"Aman",
      LastName:"Sharma",
      Salary:22000
    },
  ])