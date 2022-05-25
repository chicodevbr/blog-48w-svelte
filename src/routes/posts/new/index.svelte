<script>
  let title = '';
  let content = '';
  let tags = '';
  let coverImage = '';

  const GRAPHQL_ENDPOINT = 'https://api-48w-blog.herokuapp.com/';

  async function submitFormHandle() {
    const token = localStorage.getItem('token');
    console.log(token);

    const userPost = gql`
      mutation Post($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
      }
    `;

    const data = await request(GRAPHQL_ENDPOINT, userPost, {
      title: title,
      content: content,
      tags: tags,
      coverImage: coverImage,
    });
  }
</script>

<svelte:head>
  <title>48 W | New Post</title>
</svelte:head>

<div class="flex justify-center m-3 md:mt-8">
  <article class="prose"><h2>Create a post</h2></article>
</div>

<div class="card bg-base-100 shadow-xl m-2 md:m-24">
  <div class="card-body">
    <div class="form-control w-full">
      <form on:submit|preventDefault={submitFormHandle}>
        <input
          type="text"
          placeholder="Title"
          class="input input-bordered m-10 w-4/5 max-w-full text-3xl"
          value={title}
          on:input={event => (title = event.target.value)}
        />

        <input
          type="text"
          placeholder="URL"
          class="input input-bordered m-10 w-4/5 max-w-full text-xl"
          value={coverImage}
          on:input={event => (coverImage = event.target.value)}
        />

        <input
          type="text"
          placeholder="add tags"
          class="input input-bordered m-10 w-4/5 max-w-full text-xl"
          value={tags}
          on:input={event => (tags = event.target.value)}
        />
        <!-- 
        <textarea
          type="text"
          placeholder="Description"
          class="textarea textarea-bordered  m-10 w-4/5 h-32 text-xl"
        /> -->
        <textarea
          type="text"
          placeholder="Write..."
          class="textarea textarea-bordered  m-10 w-4/5 h-96 text-xl"
          value={content}
          on:input={event => (content = event.target.value)}
        />
        <div class="flex justify-center m-3">
          <button
            type="button"
            on:click={submitFormHandle}
            class="btn btn-secondary mt-5">Done</button
          >
        </div>
      </form>
    </div>
  </div>
</div>
