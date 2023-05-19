import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetBaseTheme } from "../../../services/themeServices";

export const GetTheme = createAsyncThunk("fetch/theme", async () => {
  try {
    const response = await GetBaseTheme();
    return response.data;
  } catch (e) {
    return e;
  }
});

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: {},
    themeerror: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetTheme.fulfilled, (state, action) => {
      state.theme = action.payload.data;
    });
    builder.addCase(GetTheme.rejected, (state, action) => {
      state.themeerror = action.payload;
    });
  },
});

export default ThemeSlice.reducer;
