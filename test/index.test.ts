import { expect, test, describe, it, expectTypeOf } from 'vitest';
import Index from '～/pages/index';

describe('/pages/index', () => {
  test('看看有没有覆盖率', () => {
    expectTypeOf(Index).toBeFunction();
  });
  test('来看一下', () => {
    expect(1 + 1).toBe(3);
  });
});
