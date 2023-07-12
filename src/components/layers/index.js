import FramesLayer from './FramesLayer';
import StoresLayer from './StoresLayer';
import AvailableFramesLayer from './AvailableFramesLayer';
// [hygen] Import layers

export const getLayers = () => {
  return [
    FramesLayer(),
    StoresLayer(),
    AvailableFramesLayer(),
    // [hygen] Add layer
  ];
};
