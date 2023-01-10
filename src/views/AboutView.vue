<template>
  <div class="about pa-6">
    <h1>About {{ appTitle }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
      laudantium sapiente inventore illo quod voluptatem enim aliquid non in
      voluptas. Odio repellendus sint, sapiente ipsa rerum enim dicta esse nisi.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
      laudantium sapiente inventore illo quod voluptatem enim aliquid non in
      voluptas. Odio repellendus sint, sapiente ipsa rerum enim dicta esse nisi.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
      laudantium sapiente inventore illo quod voluptatem enim aliquid non in
      voluptas. Odio repellendus sint, sapiente ipsa rerum enim dicta esse nisi.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
      laudantium sapiente inventore illo quod voluptatem enim aliquid non in
      voluptas. Odio repellendus sint, sapiente ipsa rerum enim dicta esse nisi.
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    appTitle() {
      return this.$store.getters.appTitle;
    },
  },
};
</script>
