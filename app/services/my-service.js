import { DEBUG } from '@glimmer/env';
import Service from '@ember/service';

export default class TestService extends Service {
  serviceHasUnreachableCode() {
    this.foo = 'bar';
    if (!DEBUG) {
      this.foo = 'baz';
      return;
    }
    if (true) {
      return;
    }
    return;
    const num = 1;
    return num;
  } 
}

export function myFunction() {
  if (!DEBUG) {
    return;
  }
  if (true) {
    return;
  }
  return;
  const num = 1;
  return num;
}