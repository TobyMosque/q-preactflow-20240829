import { ReactFlow as LibReactFlow, Background as LibBackground, Controls as LibControls } from '@xyflow/react';
import { applyPureReactInVue, applyPureVueInReact } from 'veaury';
import VueNodeComponent from './VueNode.vue';

export const ReactFlow = applyPureReactInVue(LibReactFlow)
export const Background = applyPureReactInVue(LibBackground)
export const Controls = applyPureReactInVue(LibControls)
export const VueNode = applyPureVueInReact(VueNodeComponent)