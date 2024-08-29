import { ReactFlow as LibReactFlow, Background as LibBackground, Controls as LibControls } from '@xyflow/react';
import { applyPureReactInVue  } from 'veaury';

export const ReactFlow = applyPureReactInVue(LibReactFlow)
export const Background = applyPureReactInVue(LibBackground)
export const Controls = applyPureReactInVue(LibControls)