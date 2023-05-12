import { createSlice } from "@reduxjs/toolkit";
import intialStates from "../initialStates";
import getArticles from "../actions/getArticles.action";
import ArticleInterface from "../interfaces/Article.interface";
import { nanoid } from "nanoid";
import getArticlesByPublisherAction from "../actions/getArticlesByPublisher.action";

const generateArticlesWithIds = (articles: ArticleInterface[]) => articles.map(article => ({...article, id: nanoid()}));

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

        builder.addCase(getArticlesByPublisherAction.pending, (state) =>{
            return {...state, articlesByPublisher: {...state.articlesByPublisher, loading: true, error: null}}
        });
        builder.addCase(getArticlesByPublisherAction.fulfilled, (state, action) =>{
            return {...state, articlesByPublisher: {...state.articlesByPublisher, data: generateArticlesWithIds(action.payload), loading: false, error: null}}
        })
    },
});

export default articlesSlice.reducer