import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from './actions';


const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function* fetchDataSaga() {
  try {

    const response = yield call(axios.get, `${BASE_URL}/api/v1/userActivities`);
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga);
}

export default rootSaga;
