const listHelper = require('../utils/list_helper').palindrome

test('palindrome of a', () => {
  const result = listHelper('a')

  expect(result).toBe('a')
})

test('palindrome of react', () => {
  const result = listHelper('react')

  expect(result).toBe('tcaer')
})

test('palindrome of releveler', () => {
  const result = listHelper('releveler')

  expect(result).toBe('releveler')
})