declare type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

declare type Locale = 'en' | 'es';

declare type Nullable<T> = T | null;

declare type ErrorType = 'network' | 'api' | 'decode' | 'unknown';

type BaseError<Type extends ErrorType> = {
  type: Type;
  reason: string;
};

declare type NetworkError = BaseError<'network'>;
declare type ApiError = BaseError<'api'>;
declare type DecodeError = BaseError<'decode'>;
declare type UnknownError = BaseError<'unknown'>;
declare type AnyError = NetworkError | ApiError | DecodeError | UnknownError;
