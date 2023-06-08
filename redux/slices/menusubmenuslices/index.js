import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GetBaseMenu,
  GetBaseSubMenu,
  GetBaseTheme,
} from "../../../services/websiteServices";

export const GetMenus = createAsyncThunk("fetch/Menues", async () => {
  try {
    const response = await GetBaseMenu();
    return response.data;
  } catch (e) {
    return e;
  }
});
export const GetSubMenus = createAsyncThunk("fetch/SubMenues", async () => {
  try {
    const response = await GetBaseSubMenu();
    return response.data;
  } catch (e) {
    return e;
  }
});

export const MenusSlice = createSlice({
  name: "Menus",
  initialState: {
    menus: [],
    submenus: [],
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
    builder.addCase(GetSubMenus.fulfilled, (state, action) => {
      state.submenus = action.payload.data;
    });
    builder.addCase(GetSubMenus.rejected, (state, action) => {
      state.menuserror = action.payload;
    });
  },
});

export default MenusSlice.reducer;
