<!-- FormDialog.svelte -->
<script>
    import { EmployeData } from "../store";
    import { navigate } from 'svelte-routing';
    let userId = $$props.id;
    let data = $EmployeData.find(employee => employee.id == userId);
    let FirstName = data?data.FirstName:"";
    let LastName = data?data.LastName:""
    let Salary = data?data.Salary:""
    
  
    const handleSubmit=(event)=> {
    event.preventDefault(); 

    // check if userID available means that it is a Edit Form else it is a Add Form

    userId ?
    EmployeData.update(data => {
      return data.map(employee => {
        if (employee.id == userId) {
          return {
            ...employee,
            FirstName: FirstName,
            LastName: LastName,
            Salary: Salary,
          };
        }
        return employee;
      });
    }) :
    EmployeData.update(data => [...data , 
    {
      id: data.length + 1,
      FirstName: FirstName,
      LastName: LastName,
      Salary: Salary,
    }])
    navigate("/");
  }

  </script>
  
  <div class="form-dialog">
    <h2>Enter Your Information</h2>
    <form on:submit={handleSubmit}>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" bind:value={FirstName} />
  
      <label for="secondName">Last Name:</label>
      <input type="text" id="secondName" bind:value={LastName} />
  
      <label for="Salary">Salary</label>
      <input type="text" id="lastName" bind:value={Salary} />
  
      <button type="submit">Submit</button>
    </form>
  </div>
  
  <style>
    .form-dialog {
      max-width: 300px;
      margin: 0 auto;
    }
  
    label {
      display: block;
      margin-top: 10px;
    }
  
    input {
      width: 100%;
      padding: 5px;
      margin-top: 5px;
    }
  </style>
  