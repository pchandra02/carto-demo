import { useEffect } from 'react';
import availableFramesSource from 'data/sources/availableFramesSource';
import { STORES_LAYER_ID } from 'components/layers/StoresLayer';
import { AVAILABLE_FRAMES_LAYER_ID } from 'components/layers/AvailableFramesLayer';
import { useDispatch } from 'react-redux';
import {
  addLayer,
  removeLayer,
  addSource,
  removeSource,
} from '@carto/react-redux';

import { Grid } from '@mui/material';
import { Button } from '@mui/material';

export default function AvailableFrames() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSource(availableFramesSource));

    dispatch(
      addLayer({
        id: STORES_LAYER_ID,
        source: availableFramesSource.id,
      }),
    );

    return () => {
      dispatch(removeLayer(STORES_LAYER_ID));
      dispatch(removeSource(availableFramesSource.id));
    };
  }, [dispatch]);

  // [hygen] Add useEffect

  return (
    <Grid container direction='column'>
      <Grid item>
       Available Frames

      </Grid>
    </Grid>
  );
}
