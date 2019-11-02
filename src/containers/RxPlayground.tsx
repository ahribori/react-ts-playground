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

  return (
    <div>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export default RxPlayground;
