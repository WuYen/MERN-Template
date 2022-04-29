import { ACTION_TYPES } from './action';

export const initialState = {
  loading: true,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_TYPES.SAMPLE:
      return {
        loading: false,
      };

    default:
      return state;
  }
}
