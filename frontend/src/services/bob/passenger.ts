import { boolDecoder, Decoder } from 'json-decoder';
import axios from 'axios';

import { Passenger, PassengersDecoder, PassengerDecoder } from '../../domain';
import { normalizeErrorResponse } from '../utils';

type ApiResponse<T = unknown> = {
  data: T;
};

const isApiResponse = (input: unknown): input is ApiResponse => typeof input === 'object' && input !== null && 'data' in input;

const delay = async (timer = 2000): Promise<void> => new Promise((res) => setTimeout(res, timer));

const makeFetch = async <Data>(
  origin: string,
  resource: string,
  decoder: Decoder<Data>,
  urlParameters?: string[],
): Promise<Data> => {
  try {
    await delay();
    const parameters = urlParameters ? `/${urlParameters.join('/')}` : '';
    const { data } = await axios.get<Data>(
      `${origin}/${resource}${parameters}`,
    );

    if (!isApiResponse(data)) {
      throw new Error('Invalid api response');
    }

    const result = decoder.decode(data.data);

    if (result.type === 'OK') {
      return result.value;
    }

    throw {
      type: 'decode',
      reason: result.message,
    };
  } catch (err) {
    throw normalizeErrorResponse(err);
  }
};

const makeDelete = async <Data>(
  origin: string,
  resource: string,
  decoder: Decoder<Data>,
  urlParameters: string[],
): Promise<Data> => {
  try {
    const parameters = urlParameters ? `/${urlParameters.join('/')}` : '';
    const { data } = await axios.delete<Data>(
      `${origin}/${resource}${parameters}`,
    );

    if (!isApiResponse(data)) {
      throw new Error('Invalid api response');
    }

    const result = decoder.decode(data.data);

    if (result.type === 'OK') {
      return result.value;
    }

    throw {
      type: 'decode',
      reason: result.message,
    };
  } catch (err) {
    throw normalizeErrorResponse(err);
  }
};

const makePost = async <Data>(
  origin: string,
  resource: string,
  decoder: Decoder<Data>,
  body: unknown,
): Promise<Data> => {
  try {
    await delay();
    const { data } = await axios.post<Data>(`${origin}/${resource}`, body);
    if (!isApiResponse(data)) {
      throw new Error('Invalid api response');
    }

    const result = decoder.decode(data.data);

    if (result.type === 'OK') {
      return result.value;
    }

    throw {
      type: 'decode',
      reason: result.message,
    };
  } catch (err) {
    throw normalizeErrorResponse(err);
  }
};

const makePut = async <Data>(
  origin: string,
  resource: string,
  decoder: Decoder<Data>,
  urlParameters: string[],
  body: unknown,
): Promise<Data> => {
  try {
    const parameters = urlParameters ? `/${urlParameters.join('/')}` : '';
    const { data } = await axios.put<Data>(
      `${origin}/${resource}${parameters}`,
      body,
    );

    if (!isApiResponse(data)) {
      throw new Error('Invalid api response');
    }

    const result = decoder.decode(data.data);

    if (result.type === 'OK') {
      return result.value;
    }

    throw {
      type: 'decode',
      reason: result.message,
    };
  } catch (err) {
    throw normalizeErrorResponse(err);
  }
};

const API_URL = process.env.REACT_APP_API_URL || '';

const getAll = (): Promise<Array<Passenger>> => makeFetch<Array<Passenger>>(API_URL, 'passenger', PassengersDecoder);

const getById = (id: string): Promise<Passenger> => makeFetch<Passenger>(API_URL, 'passenger', PassengerDecoder, [id]);

const add = (
  passenger: Omit<Passenger, '_id' | 'createdAt' | 'updatedAt'>,
): Promise<Passenger> => makePost<Passenger>(API_URL, 'passenger', PassengerDecoder, passenger);

const update = (
  id: string,
  passenger: Partial<Omit<Passenger, '_id' | 'createdAt' | 'updatedAt'>>,
): Promise<Passenger> => makePut<Passenger>(API_URL, 'passenger', PassengerDecoder, [id], passenger);

const remove = (id: string): Promise<boolean> => makeDelete<boolean>(API_URL, 'passenger', boolDecoder, [id]);

export default {
  getAll,
  getById,
  add,
  update,
  remove,
};
