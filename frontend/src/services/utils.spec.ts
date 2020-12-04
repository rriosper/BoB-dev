import { normalizeErrorResponse } from './utils';

test('normalizeErrorResponse', () => {
  expect(normalizeErrorResponse(null)).toEqual({
    type: 'unknown',
    reason: 'Unknown Error',
  });

  expect(normalizeErrorResponse(true)).toEqual({
    type: 'unknown',
    reason: 'Unknown Error',
  });

  expect(normalizeErrorResponse('')).toEqual({
    type: 'unknown',
    reason: 'Unknown Error',
  });

  expect(normalizeErrorResponse({})).toEqual({
    type: 'unknown',
    reason: 'Unknown Error',
  });

  expect(normalizeErrorResponse(new Error('Test error'))).toEqual({
    type: 'api',
    reason: 'Test error',
  });

  expect(normalizeErrorResponse({ type: 'api', reason: 'Api error' })).toEqual({
    type: 'api',
    reason: 'Api error',
  });

  expect(normalizeErrorResponse({ type: 'network', reason: 'Network error' })).toEqual({
    type: 'network',
    reason: 'Network error',
  });

  expect(normalizeErrorResponse({ type: 'decode', reason: 'Decode error' })).toEqual({
    type: 'decode',
    reason: 'Decode error',
  });

  expect(normalizeErrorResponse({ type: 'unknown', reason: 'Unknown error' })).toEqual({
    type: 'unknown',
    reason: 'Unknown error',
  });
});
