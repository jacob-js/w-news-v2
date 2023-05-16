import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getArticles = createAsyncThunk('articles/get', async({pageSize=10, page=1}: {pageSize?: number; page?: number}) =>{
    const res = await axios.get(`/top-headlines?pageSize=${pageSize}&page=${page}`);
    return res.data?.articles
});

export default getArticles;