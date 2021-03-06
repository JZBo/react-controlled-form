/* @flow */
import objectReduce from 'fast-loops/lib/objectReduce'

import type { Action } from '../../../types/Action'

export default function initForm(
  state: Object,
  { payload: { formId, initialFields = {}, initialState = {} } }: Action
): Object {
  return {
    ...state,
    [formId]: {
      data: objectReduce(
        initialFields,
        (data, fieldData, fieldId) => {
          data[fieldId] = {
            ...fieldData,
            _initial: fieldData,
          }
          return data
        },
        {}
      ),
      state: {
        ...initialState,
        _initial: initialState,
      },
    },
  }
}
