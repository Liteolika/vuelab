<template>
  <div class="home">
    <ul>
      <li v-for="(message, idx) in messages" :key="idx">{{ message }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import astore from "@/store/modules/astore";

export default defineComponent({
  name: "Home",
  setup() {
    const messages = computed(() => astore.messages);

    return {
      messages,
    };
  },
});
</script>
