<script lang="ts">
  import TestN1 from '$lib/components/TestN1.svelte'

  let value = "";
  const updateValue = (event) => {
    value = event.target.value;
  }
</script>

<main>
  <h1>Vite + Svelte</h1>
  <input type="text" on:input={updateValue}>
  <div>
    <TestN1 value={value}/>
  </div>
</main>
