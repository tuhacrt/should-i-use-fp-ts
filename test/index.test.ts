import { describe, expect, it } from 'vitest'

import { onePlusTwo } from '../src'

describe('should', () => {
  it('exported', () => {
    const example = onePlusTwo
    const expected = 3

    expect(example).toEqual(expected)
  })
})
