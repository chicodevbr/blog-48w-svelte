<script>
  //import { login } from './graphql-mutation';
  import { request, gql } from 'graphql-request';

  export let mode;
  let email = '';
  let password = '';

  const GRAPHQL_ENDPOINT = process.env['GRAPHQL_ENDPOINT'];

  async function submitForm() {
    const variables = {
      email: email,
      password: password,
    };

    console.log(variables);

    const userLogin = gql`
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
      }
    `;

    const { data } = await request(GRAPHQL_ENDPOINT, userLogin, {
      email: email,
      password: password,
    });

    console.log(data);
  }
</script>

<form on:submit|preventDefault={submitForm}>
  {#if mode === 'signup'}
    <label for="name" class="label">
      <span class="label-text">Name</span>
    </label>
    <input
      name="name"
      id="name"
      type="text"
      placeholder="Type here"
      class="input input-md input-bordered w-full max-w-xs"
    />
  {/if}

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

  {#if mode === 'signup'}
    <label for="photo" class="label">
      <span class="label-text">Photo</span>
    </label>
    <input
      name="photo"
      id="photo"
      type="text"
      placeholder="URL"
      class="input input-md input-bordered w-full max-w-xs"
    />
  {/if}

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
    class="btn btn-secondary mt-5">Create</button
  >
</form>
