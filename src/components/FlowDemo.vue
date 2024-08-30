<template>
  <ReactFlow :nodes="nodes" :nodeTypes="nodeTypes">
    <Background />
    <Controls />
    <input-node :node="node1" label="Hello" v-model="name"></input-node>
    <input-node :node="node2" label="Surname" v-model="surname"></input-node>
  </ReactFlow>
</template>

<script setup lang="ts">
import { ReactFlow, Background, Controls, VueNode } from 'components/reactflow';
import { ref } from 'vue';
import InputNode from 'components/InputNode.vue';

const node1 = ref<HTMLDivElement>();
const node2 = ref<HTMLDivElement>();

const name = defineModel<string>('name');
const surname = defineModel<string>('surname');

const nodeTypes = { vueNode: VueNode };
const nodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { node: node1 },
    type: 'vueNode',
  },
  {
    id: '2',
    position: { x: 100, y: 100 },
    data: { node: node2 },
    type: 'vueNode',
  },
];
</script>
