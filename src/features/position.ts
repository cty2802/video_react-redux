import { createSlice, Dispatch } from '@reduxjs/toolkit';

type Position = {
  x: number;
  y: number;
}

const startPosition: Position = { x: 0, y: 0 };

const positionSlice = createSlice({
  name: 'position',
  initialState: startPosition,
  reducers: {
    moveLeft: position => { position.x -= 1 },
    moveRight: position => { position.x += 1 },
    moveUp: position => { position.y -= 1 },
    moveDown: position => { position.y += 1 },
  }
})

export const { moveRight, moveDown, moveLeft, moveUp } = positionSlice.actions;
export default positionSlice.reducer;

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export const doACircle = (delay: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(moveRight());
    await wait(delay);
    dispatch(moveDown());
    await wait(delay);
    dispatch(moveLeft());
    await wait(delay);
    dispatch(moveUp());
  }; 
}

