import { makeMethodController, MethodControllers } from '../core';
import {
  passengerValidationSchema,
  requiredPassengerValidationSchema,
} from '../domain';
import models from '../models';

const getById = makeMethodController(
  async ({ params: { id = null }, makeResponse, makeError }) => {
    if (!id) {
      throw makeError.badRequest('An valid ID is required');
    }

    const data = await models.passenger.findOne({ _id: id });
    if (!data) {
      throw makeError.notFound('passenger not found');
    }

    makeResponse(data.toJSON());
  },
);

const getAll = makeMethodController(async ({ makeResponse }) => {
  const data = await models.passenger.find();
  makeResponse(data);
});

const add = makeMethodController(async ({ body, makeResponse, makeError }) => {
  const passenger = await requiredPassengerValidationSchema.validate(body);
  if (!passenger) {
    throw makeError.badRequest('Invalid passenger data');
  }

  const result = await models.passenger.create(passenger);
  await result.save();

  makeResponse(result);
});

const update = makeMethodController(
  async ({
    params: { id = null }, body, makeError, makeResponse,
  }) => {
    if (!id) {
      throw makeError.badRequest('An valid ID is required');
    }
    await passengerValidationSchema.validate(body);

    const result = await models.passenger.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!result) {
      throw makeError.notFound('Passenger not found');
    }

    makeResponse(result);
  },
);

const remove = makeMethodController(
  async ({ params: { id = null }, makeError, makeResponse }) => {
    if (!id) {
      throw makeError.badRequest('An valid ID is required');
    }

    const result = await models.passenger.findByIdAndDelete(id);

    if (!result) {
      throw makeError.notFound('Passenger not found');
    }

    makeResponse(true);
  },
);

const methods: MethodControllers = {
  '/': {
    get: getAll,
    post: add,
  },
  '/:id': {
    get: getById,
    put: update,
    delete: remove,
  },
};

export default methods;
