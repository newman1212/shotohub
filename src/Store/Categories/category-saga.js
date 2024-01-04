import { takeLatest, call, put, all } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../Utils/Firebase/firebase';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './category-action';

import { CATEGORY_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}