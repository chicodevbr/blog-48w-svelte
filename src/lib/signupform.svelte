<div class="card lg:card-side bg-base-100 shadow-xl m-24">
  <figure>
    <img
      class="rounded-xl"
      src="https://images.unsplash.com/photo-1510442650500-93217e634e4c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691"
      alt={`Cover image for signup page`}
    />
    <div class="card-body">
      <article class="prose"><h1>Create a user</h1></article>
      <div class="form-control w-full max-w-xs">
        <form>
          <div name="name" id="name" class="label">
            <span class="label-text">Name</span>
          </div>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Type here"
            class="input input-md input-bordered w-full max-w-xs"
          />

          <div class="label">
            <span class="label-text">Email</span>
          </div>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="email@infosite.com"
            class="input input-md input-bordered w-full max-w-xs"
          />

          <div class="label">
            <span class="label-text">Photo</span>
          </div>
          <input
            name="photo"
            id="photo"
            type="text"
            placeholder="URL"
            class="input input-md input-bordered w-full max-w-xs"
          />

          <div class="label">
            <span class="label-text">Password</span>
          </div>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="*********"
            class="input input-md input-bordered w-full max-w-xs"
          />

          <button type="submit" class="btn btn-secondary mt-5"
            >Create</button
          >
        </form>
      </div>
    </div>
  </figure>
</div>
