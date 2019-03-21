import * as React from 'react';

/**
 * 리액트 클래스 컴포넌트 HOC 예제
 * @param Component
 */
export default (Component: typeof React.Component) => {
  return class WithHello extends React.Component {
    render() {
      return <Component hello={'world'} {...this.props} />;
    }
  };
};
