import { createSlice } from "@reduxjs/toolkit";
import intialStates from "../intialStates";
import getArticles from "../actions/getArticles.action";
import AtricleInterface from "../interfaces/Article.interface";
import { nanoid } from "nanoid";

const generateArticlesWithIds = (articles: AtricleInterface[]) => articles.map(article => ({...article, id: nanoid()}));

const articlesSlice = createSlice({
    name: 'articles',
    initialState: intialStates.articles,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getArticles.pending, (state) =>{
            return {...state, articles: {...state.articles, loading: true, error: null}}
        });
        builder.addCase(getArticles.fulfilled, (state, action) =>{
            return {...state, articles: {...state.articles, data: generateArticlesWithIds(action.payload), loading: false, error: null}}
        });
    },
});

export default articlesSlice.reducer