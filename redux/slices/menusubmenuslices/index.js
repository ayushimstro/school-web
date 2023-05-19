import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetBaseMenu, GetBaseTheme } from "../../../services/themeServices";

export const GetMenus = createAsyncThunk("fetch/Menues", async () => {
  try {
    const response = await GetBaseMenu();
    return response.data;
  } catch (e) {
    return e;
  }
});

export const MenusSlice = createSlice({
  name: "Menus",
  initialState: {
    menus: {},
    menuserror: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetMenus.fulfilled, (state, action) => {
      state.menus = action.payload.data;
    });
    builder.addCase(GetMenus.rejected, (state, action) => {
      state.menuserror = action.payload;
    });
  },
});

export default MenusSlice.reducer;
