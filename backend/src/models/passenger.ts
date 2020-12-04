import { Document, model, Schema } from 'mongoose';

import { Passenger } from '../domain';

const passengerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bags: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const passengerModel = model<Document & Passenger>(
  'Passenger',
  passengerSchema,
);

export default passengerModel;
