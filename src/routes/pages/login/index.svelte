<script>
  import { request, gql } from 'graphql-request';

  let email = '';
  let password = '';

  const GRAPHQL_ENDPOINT = 'https://api-48w-blog.herokuapp.com/';

  async function submitForm() {
    const userLogin = gql`
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
      }
    `;

    const data = await request(GRAPHQL_ENDPOINT, userLogin, {
      email: email,
      password: password,
    });

    localStorage.setItem('token', data.login.token);
  }
</script>

<svelte:head>
  <title>48 W | Login</title>
</svelte:head>
<div class="flex justify-center m-3 md:mt-8">
  <article class="prose"><h2>Login</h2></article>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl m-2 md:m-24">
  <figure class="md:shrink-0">
    <img
      class="rounded-xl md:object-cover md:h-96 xl:w-96 xl:h-full"
      src="https://images.unsplash.com/photo-1510442650500-93217e634e4c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691"
      alt={`Cover image for signup page`}
    />
  </figure>
  <div class="card-body">
    <div class="form-control w-full max-w-xs">
      <form on:submit|preventDefault={submitForm}>
        <label for="email" class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          name="email"
          id="email"
          type="email"
          value={email}
          placeholder="email@infosite.com"
          class="input input-md input-bordered w-full max-w-xs"
          on:input={event => (email = event.target.value)}
        />

        <label for="password" class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          name="password"
          id="password"
          type="password"
          value={password}
          placeholder="*********"
          class="input input-md input-bordered w-full max-w-xs"
          on:input={event => (password = event.target.value)}
        />

        <button
          type="button"
          on:click={submitForm}
          class="btn btn-secondary mt-5">Send</button
        >
      </form>
    </div>
    <p />
  </div>
</div>
