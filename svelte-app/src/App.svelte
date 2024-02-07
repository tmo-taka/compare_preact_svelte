<script lang="ts">
  import TestN1 from '$lib/components/TestN1.svelte'
  import TestD1 from '$lib/components/TestD1.svelte'
  import TestD2 from '$lib/components/TestD2.svelte'
  import TestD3 from '$lib/components/TestD3.svelte'
  import TestD4 from '$lib/components/TestD4.svelte'
  import TestD5 from '$lib/components/TestD5.svelte'
  import TestD6 from '$lib/components/TestD6.svelte'
  import TestD7 from '$lib/components/TestD7.svelte'
  import TestD8 from '$lib/components/TestD8.svelte'
  import TestD9 from '$lib/components/TestD9.svelte'
  import TestD10 from '$lib/components/TestD10.svelte'

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
  <div>
    <TestD1 />
    <TestD2 />
    <TestD3 />
    <TestD4 />
    <TestD5 />
    <TestD6 />
    <TestD7 />
    <TestD8 />
    <TestD9 />
    <TestD10 />
  </div>
</main>
