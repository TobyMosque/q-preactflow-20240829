<template>
  <q-page class="row items-center justify-evenly">
    <div style="width: 360px; height: 360px">
      <ReactFlow :nodes="nodes" :nodeTypes="nodeTypes">
        <Background />
        <Controls />
      </ReactFlow>
    </div>
    <input-node :node="node1" label="Hello" v-model="name"></input-node>
    <input-node :node="node2" label="Surname" v-model="surname"></input-node>
    <q-card>
      <q-card-section>
        <pre>{{ { name, surname } }}</pre>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ReactFlow, Background, Controls, VueNode } from 'components/reactflow';
import { ref } from 'vue'
import InputNode from 'components/InputNode.vue'

const node1 = ref<HTMLDivElement>()
const node2 = ref<HTMLDivElement>()

const name = ref('Toby')
const surname = ref('Mosque')

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

defineOptions({
  name: 'IndexPage'
});
</script>
