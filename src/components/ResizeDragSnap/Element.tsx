import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface IProps {}

interface IState {}

class Element extends Component<IProps, IState> {
  MARGINS: number = 4;
  ON_TOP_EDGE: boolean = false;
  ON_LEFT_EDGE: boolean = false;
  ON_RIGHT_EDGE: boolean = false;
  ON_BOTTOM_EDGE: boolean = false;

  handleMouseMove: React.MouseEventHandler<HTMLElement> = e => {
    const boundingClientRect = (e.target as HTMLElement).getBoundingClientRect();
    const { left, top, width, height } = boundingClientRect;
    const { clientX, clientY } = e;
    const x = clientX - left;
    const y = clientY - top;
    this.ON_TOP_EDGE = y < this.MARGINS;
    this.ON_LEFT_EDGE = x < this.MARGINS;
    this.ON_RIGHT_EDGE = x >= width - this.MARGINS;
    this.ON_BOTTOM_EDGE = y >= height - this.MARGINS;
    this.setCursorStyle(e.target);
  };

  setCursorStyle = (node: EventTarget) => {
    const nodeElement = ReactDOM.findDOMNode(
      node as HTMLElement,
    ) as HTMLElement;
    if (this.ON_RIGHT_EDGE || this.ON_LEFT_EDGE) {
      nodeElement.style.cursor = 'ew-resize';
    } else if (this.ON_TOP_EDGE || this.ON_BOTTOM_EDGE) {
      nodeElement.style.cursor = 'ns-resize';
    } else {
      nodeElement.style.cursor = 'default';
    }
  };

  render() {
    return (
      <div
        onMouseMove={this.handleMouseMove}
        style={{
          display: 'inline-block',
          width: 200,
          height: 200,
          margin: 4,
          border: '2px solid black',
        }}
      />
    );
  }
}

export default Element;
