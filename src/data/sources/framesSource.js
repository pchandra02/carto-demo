import { MAP_TYPES } from '@deck.gl/carto';

const FRAMES_SOURCE_ID = 'framesSource';

const source = {
  id: FRAMES_SOURCE_ID,
  type: MAP_TYPES.TABLE,
  connection: 'frame_data',
  data: `dbt-proj-369702.test123.frames`,
};

export default source;
