import {
  arrayDecoder,
  exactDecoder,
  objectDecoder,
  oneOfDecoders,
  stringDecoder,
  Decoder,
  ok,
  err,
  decoder,
} from 'json-decoder';

const isDate = (input: unknown): input is Date => !Number.isNaN(Date.parse(input as string));

const dateDecoder: Decoder<Date> = decoder<Date>((input: unknown) => (isDate(input) ? ok(new Date(input)) : err('Invalid date')));

type Bags = 1 | 2 | 3 | 4 | 5;

export type Passenger = {
  _id: string;
  name: string;
  bags: Bags;
  updatedAt: Date;
  createdAt: Date;
};

export const PassengerDecoder = objectDecoder<Passenger>({
  _id: stringDecoder,
  name: stringDecoder,
  updatedAt: dateDecoder,
  createdAt: dateDecoder,
  bags: oneOfDecoders<Bags>(
    exactDecoder(1),
    exactDecoder(2),
    exactDecoder(3),
    exactDecoder(4),
    exactDecoder(5),
  ),
});

export const PassengersDecoder = arrayDecoder(PassengerDecoder);
