import HttpErrorResponseModel from '../models/HttpErrorResponseModel';
import * as HttpUtility from './HttpUtility';
import * as Utils from './utils';

export async function getToModel(Model, endpoint, params) {
  const response = await HttpUtility.get(endpoint, params);

  return _restModelCreator(Model, response);
}

export async function postToModel(Model, endpoint, data) {
  const response = await HttpUtility.post(endpoint, data);

  return _restModelCreator(Model, response);
}

export async function putToModel(Model, endpoint, data) {
  const response = await HttpUtility.put(endpoint, data);

  return _restModelCreator(Model, response);
}

export async function deleteToModel(Model, endpoint) {
  const response = await HttpUtility.del(endpoint);

  return _restModelCreator(Model, response);
}

function _restModelCreator(Model, response) {
  if (response instanceof HttpErrorResponseModel) {
    return response;
  }
  const data = response.data.results;
  return !Array.isArray(data) ? new Model(data) : data.map((json) => new Model(json));
}
