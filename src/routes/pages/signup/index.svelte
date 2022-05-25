<script>
  import Form from '../../lib/form.svelte';
  let mode;
</script>

<svelte:head>
  <title>48 W | Signup</title>
</svelte:head>

<div class="flex justify-center m-3 md:mt-8">
  <article class="prose"><h1>Create a user</h1></article>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl m-2 md:m-24">
  <figure class="md:shrink-0">
    <img
      class="rounded-xl  md:h-96 xl:w-96 xl:h-full"
      src="https://images.unsplash.com/photo-1510442650500-93217e634e4c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691"
      alt={`Cover image for signup page`}
    />
  </figure>
  <div class="card-body">
    <div class="form-control w-full max-w-xs">
      <Form mode="signup" />
    </div>
  </div>
</div>
