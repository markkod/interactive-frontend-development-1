// Action creators can have side-effects
let nextId = 1;

// Export action type constants for reducers to use
export const COMMENT_SUBMITTED = 'COMMENT_SUBMITTED';
export const commentSubmitted = ({author, text}) => {
  // An action must be a plain JavaScript object (no instances of classes!)
  return {
    type: COMMENT_SUBMITTED,
    payload: {
      id: nextId++,
      author: author,
      text: text
    }
  };
};

// A helper function can be created to create trivial actions and avoid
// clutter.
const createPayloadForwardingAction = (type) => (payload) =>
  ({type: type, payload: payload});

export const FILTER_SET = 'FILTER_SET';
export const filterSet = createPayloadForwardingAction(FILTER_SET);
