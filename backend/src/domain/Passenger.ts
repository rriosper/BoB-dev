import { number, object, string } from 'yup';

export type Passenger = {
  name: string;
  bags: 1 | 2 | 3 | 4 | 5;
};

type PassengerYupSchema = {
  [K in keyof Passenger]?: Passenger[K] extends number ? number : Passenger[K];
};

const notRequiredString = string().trim();
const requiredString = notRequiredString.required();
const notRequiredNumber = number();

const bags = notRequiredNumber.oneOf([1, 2, 3, 4, 5]);

export const passengerValidationSchema = object().shape<PassengerYupSchema>({
  name: notRequiredString,
  bags,
});

export const requiredPassengerValidationSchema = object().shape<Passenger>({
  name: requiredString,
  bags: bags.required(),
});
