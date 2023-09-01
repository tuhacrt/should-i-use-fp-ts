import { describe, expect, it } from 'vitest'

import { onePlusTwo } from '../src'

describe('onePlusTwo()', () => {
  it(`Given: null
      When: onePlusTwo
      Then: return 3`, () => {
    const example = onePlusTwo
    const expected = 3

    expect(example).toEqual(expected)
  })
})
