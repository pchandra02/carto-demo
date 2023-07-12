import { MAP_TYPES } from '@deck.gl/carto';

const AVAILABLE_FRAMES_SOURCE_ID = 'availableFramesSource';

const source = {
  id: AVAILABLE_FRAMES_SOURCE_ID,
  type: MAP_TYPES.QUERY,
  //type: MAP_TYPES.TABLE,
  connection: 'frame_data',
  //data: `dbt-proj-369702.test123.frames`,
  geoColumn: 'geom',
  data: `Select geom, frame_id, location, latitude, longitude from dbt-proj-369702.test123.frames join dbt-proj-369702.test123.availability as availability ON frames.frame_id = availability.field_1 where availability.field_3 = "1" `,
  
};

export default source;
