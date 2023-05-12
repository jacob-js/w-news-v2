import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export default createAsyncThunk('publishers/get', async() =>{
    const res = await axios.get(`/top-headlines/sources`);
    return res.data?.sources
});