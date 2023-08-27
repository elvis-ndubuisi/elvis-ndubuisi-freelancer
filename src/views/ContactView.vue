<script setup></script>

<template>
  <main>
    <section>
      <div>
        <h1>Get in touch</h1>
        <p>
          Have a project in mind? React out through the form and I&apos;ll get back to you within
          the next 48 hours
        </p>
        <div>socials</div>
      </div>
      <form @submit.prevent="" class="flex flex-col gap-6">
        <div>
          <label for="name">Your name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" />
        </div>
        <div>
          <label for="email">Your E-mail</label>
          <input type="text" name="email" id="email" placeholder="Enter your e-mail" />
        </div>
        <div>
          <label for="budget">Your budget</label>
          <input type="text" name="budget" id="budget" placeholder="Amount" />
        </div>
        <div>
          <label for="description">Tell me a bit more what your are looking for?</label>
          <textarea name="description" id="description" cols="30" rows="10" />
        </div>
        <input type="submit" value="Submit Now" />
      </form>
    </section>
    <!-- Faqs -->
    <section>
      <div>
        <h2>Frequently Asked Questions</h2>
        <button>Contact Me</button>
      </div>
    </section>
  </main>
</template>
