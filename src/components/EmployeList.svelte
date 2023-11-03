<script>
  import { Link } from "svelte-routing";
  import { EmployeData } from "../store";
  let editindex
  const handleDelet = (id) => {
    EmployeData.update((newEmployeData) => {
      return newEmployeData.filter((employe) => employe.id != id);
    });
  };
</script>

<main>
  <h2>Employee Management System</h2>
  <button><Link to={`/Add`}>Add New Employee</Link></button>

  <table>
    <tr>
      <th>S.NO</th>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Savings</th>
      <th>Action</th>
    </tr>
    {#each $EmployeData as employee (employee.id)}
      <tr>
        <td>{employee.id}</td>
        <td>{employee.FirstName}</td>
        <td>{employee.LastName}</td>
        <td>{employee.Salary}</td>
        <td>
            <button><Link to={`/Edit/${employee.id}`}>Edit</Link></button>
          <button
            on:click={() => {
              handleDelet(employee.id);
            }}>Delet</button
          >
        </td>
      </tr>
    {/each}
    </table>
</main>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  th {
    background-color: #04aa6d;
    color: white;
  }
</style>
