import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import intialStates from "../initialStates";
import getArticles from "../actions/getArticles.action";
import ArticleInterface from "../interfaces/Article.interface";
import { nanoid } from "nanoid";
import getArticlesByPublisherAction from "../actions/getArticlesByPublisher.action";

const generateArticlesWithIds = (articles: ArticleInterface[]) => articles.map(article => ({...article, id: nanoid()}));

const articlesSlice = createSlice({
    name: 'articles',
    initialState: intialStates.articles,
    reducers: {
        filterArticles: (state, {payload}: PayloadAction<{query: string}>) =>{
            return {...state, filtered: {...state.filtered, data: state.articles.data.filter(article => article.title.toLowerCase().indexOf(payload.query) !== -1)}}
        },
        setFilterKeyWord: (state, {payload}: PayloadAction<string>) => ({...state, filterKeyword: payload})
    },
    extraReducers(builder) {
        builder.addCase(getArticles.pending, (state) =>{
            return {...state, articles: {...state.articles, loading: true, error: null}}
        });
        builder.addCase(getArticles.fulfilled, (state, action: PayloadAction<ArticleInterface[]>) =>{
            return {...state, articles: {...state.articles, data: generateArticlesWithIds(action.payload), loading: false, error: null}}
        });

        builder.addCase(getArticlesByPublisherAction.pending, (state) =>{
            return {...state, articlesByPublisher: {...state.articlesByPublisher, loading: true, error: null}}
        });
        builder.addCase(getArticlesByPublisherAction.fulfilled, (state, action: PayloadAction<ArticleInterface[]>) =>{
            return {...state, articlesByPublisher: {...state.articlesByPublisher, data: generateArticlesWithIds(action.payload), loading: false, error: null}}
        })
    },
});

export const {setFilterKeyWord, filterArticles} = articlesSlice.actions;

export default articlesSlice.reducer