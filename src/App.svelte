<script>
	import EmployeList from "./components/EmployeList.svelte";
	import FormDialog from "./components/FormDialog.svelte";
	import { Router, Route } from "svelte-routing";
</script>

<main>
<Router>
	<Route path="/" component={EmployeList} />
	<Route path="/Add" component={FormDialog} />
	<Route path="/Edit/:id" component={FormDialog} />
</Router>

</main>

<style>
</style>