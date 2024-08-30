<template>
  <q-page class="row items-center justify-evenly">
    <div style="width: 360px; height: 360px">
      <component
        :is="component"
        v-model:name="name"
        v-model:surname="surname"
      ></component>
    </div>
    <q-card>
      <q-card-section>
        <pre>{{ { name, surname } }}</pre>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { type Component, h } from 'vue';
import { ref } from 'vue';

const component = ref<Component>(() => h('div', {}, 'Loading...'));
if (process.env.CLIENT) {
  import('components/FlowDemo.vue').then(
    (module) => (component.value = module.default),
  );
}

const name = ref('Toby');
const surname = ref('Mosque');

defineOptions({
  name: 'IndexPage',
});
</script>
