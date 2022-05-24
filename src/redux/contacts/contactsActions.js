import { createAction } from '@reduxjs/toolkit';

export const deleteidAction = createAction('deleteidAction');
export const addAction = createAction('addAction');
export const filterData = createAction('filterData');
// export const incrementAction = createAction("incrementAction");
// -> (value) => ({type: "incrementActionType", payload: value}) -> incrementAction(321)
