import { useEffect } from 'react';
import framesSource from 'data/sources/framesSource';
import availableFramesSource from 'data/sources/availableFramesSource';
import { STORES_LAYER_ID } from 'components/layers/StoresLayer';
import { useDispatch } from 'react-redux';
import { ROUTE_PATHS } from 'routes';

import {
  addLayer,
  removeLayer,
  addSource,
  removeSource,
} from '@carto/react-redux';

import { Grid } from '@mui/material';

export default function Stores() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSource(framesSource));

    dispatch(
      addLayer({
        id: STORES_LAYER_ID,
        source: framesSource.id,
      }),
    );

    return () => {
      dispatch(removeLayer(STORES_LAYER_ID));
      dispatch(removeSource(framesSource.id));
    };
  }, [dispatch]);

  // [hygen] Add useEffect

  return (
    <Grid container direction='column'>
          <Grid item> Frames by Location  </Grid>
      <Grid item>
        <a href ="/available_frames"> 
        <button>Show Available Frames</button></a>
        </Grid>
    </Grid>
  );
}

