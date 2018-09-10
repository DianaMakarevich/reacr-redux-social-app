import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import request from 'superagent';

function getUser() {
    const url = 'https://randomuser.me/api/?inc=gender,name,picture,location&results=80&nat=gb';
  return request
          .get(url)
    .then((data) => {
      return JSON.parse(data.text);
    });
}

function* callGetUser({resolve, reject}) {
  const result = yield call(getUser);
  if (result.results) {
    yield put({type: "USERS_FETCHED", result});
    yield call(resolve);
  } else {
    yield call(reject);
  }
}

function* getUserSaga() {
  yield* takeEvery("FETCH_USERS", callGetUser);
}

export default function* root() {
  yield [
    fork(getUserSaga)
  ]
}