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
  ON_EDGE: boolean = false;
  ON_MOVE: boolean = false;
  offsetX: number = 0;
  offsetY: number = 0;

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
    this.ON_EDGE =
      this.ON_TOP_EDGE ||
      this.ON_BOTTOM_EDGE ||
      this.ON_LEFT_EDGE ||
      this.ON_RIGHT_EDGE;
    this.setCursorStyle(e.target);

    if (this.ON_MOVE) {
      const nodeElement = ReactDOM.findDOMNode(
        e.target as HTMLElement,
      ) as HTMLElement;
      nodeElement.style.left = `${clientX - this.offsetX}px`;
      nodeElement.style.top = `${clientY - this.offsetY}px`;
    }
  };

  handleMouseDown: React.MouseEventHandler<HTMLElement> = e => {
    if (this.ON_EDGE) {
    } else {
      const boundingClientRect = (e.target as HTMLElement).getBoundingClientRect();
      const { left, top } = boundingClientRect;
      const { clientX, clientY } = e;
      this.ON_MOVE = true;
      this.offsetX = clientX - left;
      this.offsetY = clientY - top;
    }
  };

  handleMouseUp: React.MouseEventHandler<HTMLElement> = e => {
    if (this.ON_EDGE) {
    } else {
      if (this.ON_MOVE) {
        this.ON_MOVE = false;
      }
    }
  };

  handleMouseLeave: React.MouseEventHandler<HTMLElement> = e => {
    if (this.ON_EDGE) {
    } else {
      if (this.ON_MOVE) {
        this.ON_MOVE = false;
      }
    }
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
      nodeElement.style.cursor = 'move';
    }
  };

  render() {
    return (
      <div
        onMouseMove={this.handleMouseMove}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
        style={{
          display: 'inline-block',
          position: 'absolute',
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
