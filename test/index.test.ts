import { expect, test, describe, it, expectTypeOf } from 'vitest';
import { render } from '@testing-library/vue'
import Index from '@/views/index/index.vue';

describe('/src/views/index', () => {
  it('看看覆盖率', () => {
    const {getByText} = render(Index, {
      props: {
        text: 'hello world'
      }
    })
    
    console.log('getByText', getByText)
    getByText('hello')
  });
  it('来看一下', () => {
    expect(1 + 1).toBe(2);
  });
});

