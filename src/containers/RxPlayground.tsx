import React from 'react';
import { debounceTime, map } from 'rxjs/operators';
import { useEventCallback } from 'rxjs-hooks';

const RxPlayground: React.FC = () => {
  const [handleClick] = useEventCallback(eventSource$ =>
    eventSource$.pipe(
      debounceTime(1000),
      map(value => console.log(value)),
    ),
  );

  const [handleChange, [text]] = useEventCallback(
    eventSource$ =>
      eventSource$.pipe(
        // @ts-ignore
        map((event: any) => {
          return [event.target.value];
        }),
        debounceTime(500),
      ),
    [''],
  );

  return (
    <div>
      <h1>Mouse Event</h1>
      <button onClick={handleClick}>클릭</button>
      <h1>Input Event</h1>
      <input type="text" onChange={handleChange} />
      <div>Debounced value: {text} </div>
    </div>
  );
};

export default RxPlayground;
