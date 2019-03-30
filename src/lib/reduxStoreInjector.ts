import { connect } from 'react-redux';
import * as React from 'react';
import { RootState } from '../reduxStore';

export const inject = (
  storeNames: Array<keyof RootState> = [],
  mapDispatchToProps?: Function,
) => (WrappedComponent: typeof React.Component) => {
  if (!Array.isArray(storeNames)) {
    throw new Error('stateNames must be an array');
  }
  const mapStateToProps = (state: RootState) => {
    const map: RootState = {} as RootState;
    for (let i = 0, length = storeNames.length; i < length; i++) {
      const store = state[storeNames[i]];
      if (!store) {
        console.error(`존재하지 않는 스토어입니다 : ${storeNames[i]}`);
        break;
      }
      map[storeNames[i]] = store;
    }
    return map;
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedComponent);
};
