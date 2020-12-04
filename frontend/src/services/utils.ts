function isProperAnyError(error: unknown): error is AnyError {
  return (
    typeof error === 'object'
    && error !== null
    && 'type' in error
    && 'reason' in error
  );
}

/**
 * Normalize error response
 *
 * Transform any error response in an error that the app can use.
 */
export const normalizeErrorResponse = (error: unknown): AnyError => {
  if (error instanceof Error) {
    return {
      type: 'api',
      reason: error.message,
    };
  }
  if (isProperAnyError(error)) {
    return error;
  }

  return {
    type: 'unknown',
    reason: 'Unknown Error',
  };
};
