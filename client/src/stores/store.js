import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';

import sampleReducer from './sample/reducer';

const store = configureStore(
  {
    reducer: {
      sample: sampleReducer,
    },
  },
  composeWithDevTools()
);

export default store;
