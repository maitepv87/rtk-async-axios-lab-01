import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axio";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");
  return response.data;
});
