import * as Rx from 'rxjs';
import { computed } from 'mobx';

export const toStream = <T>(expression: () => T): Rx.Observable<T> =>
  Rx.Observable.create((observer: Rx.Observer<T>) => {
    const computedValue = computed(expression);
    return computedValue.observe_(change => observer.next(change.newValue));
  });
