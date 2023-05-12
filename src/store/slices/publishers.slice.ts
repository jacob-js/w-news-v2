import { createSlice } from "@reduxjs/toolkit";
import intialStates from "../initialStates";
import getPublishersAction from "../actions/getPublishers.action";

const publishersSlice = createSlice({
    name: 'publishers',
    initialState: intialStates.publishers,
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(getPublishersAction.pending, (state) => ({...state, publishers: {...state.publishers, loading: true, error: null}})),
        builder.addCase(getPublishersAction.fulfilled, (state, {payload}) => ({...state, publishers: {...state.publishers, data: payload, error: null}}))
    }
});

export default publishersSlice.reducer;