<template>
  <teleport v-if="node" :to="node">
    <q-card>
      <q-input filled :label="label" v-model="value"></q-input>
    </q-card>
  </teleport>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  node?: HTMLDivElement;
  label: string;
}>();
const value = defineModel<string>();
const { node, label } = toRefs(props);
</script>
