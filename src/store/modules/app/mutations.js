const UPDATE_WINDOW_WIDTH = (state, val) => {
  state.windowWidth = val
}

const TOGGLE_OVERLAY = (state, val) => {
  state.shallShowOverlay = val !== undefined ? val : !state.shallShowOverlay
}

export default {
  UPDATE_WINDOW_WIDTH,
  TOGGLE_OVERLAY,
}
