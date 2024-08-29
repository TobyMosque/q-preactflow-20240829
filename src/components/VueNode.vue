<template>
  <div ref="node"></div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'

const props = defineProps<{
  data: { node: HTMLDivElement }
}>()
const node = toRef(props.data, 'node')
</script>
