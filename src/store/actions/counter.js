import { UPDATE } from '../types/counter'
import { createAction } from 'redux-actions'


export const update = createAction(UPDATE, payload => payload);