import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export default createAsyncThunk('articles/getByPublisher', async(source: string | number) =>{
    const res = await axios.get(`/top-headlines?sources=${source}`);
    return res.data?.articles
});