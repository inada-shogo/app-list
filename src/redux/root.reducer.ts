import {combineReducers} from 'redux';
import { SampleReducer } from './sample/sample.reducer';
import { SampleState } from './sample/sample.type';
import { TestReducer } from './test/test.reducer';
import { TestState } from './test/test.type';

export type State = {
  sample: SampleState;
  test: TestState;
};

export const RootReducer = () =>
  combineReducers({
    sample: SampleReducer,
    test: TestReducer,
  });
