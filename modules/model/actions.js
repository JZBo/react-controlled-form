import { createAction } from 'redux-actions'
import {
  INIT_FIELD,
  UPDATE_FIELD,
  INIT_FORM,
  RESET_FORM,
  UPDATE_STATE,
} from './actionTypes'

export const initField = createAction(INIT_FIELD)
export const updateField = createAction(UPDATE_FIELD)
export const initForm = createAction(INIT_FORM)
export const resetForm = createAction(RESET_FORM)
export const updateState = createAction(UPDATE_STATE)
