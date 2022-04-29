const SAMPLE = 'SAMPLE';

export function sampleAction(payload) {
  return {
    type: SAMPLE,
    payload,
  };
}

export const ACTION_TYPES = {
  SAMPLE,
};
