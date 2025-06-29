import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_DATA_REQUEST,
  fetchDataSuccess,
  fetchDataFailure,
} from "./action";

function* fetchData() {
  try {
    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = yield response.json();
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}
