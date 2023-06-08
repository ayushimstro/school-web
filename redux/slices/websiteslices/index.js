import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GetBaseMenu,
  GetBaseSubMenu,
  GetBaseTheme,
  GetCMS,
  GetAcademic,
  GetNews,
  GetGallery,
} from "../../../services/websiteServices";

export const GetCMSData = createAsyncThunk("fetch/CMS", async (params) => {
  try {
    const response = await GetCMS(params);
    return response.data;
  } catch (e) {
    return e;
  }
});
export const GetNewsData = createAsyncThunk("fetch/News", async (params) => {
  try {
    const response = await GetNews(params);
    return response.data;
  } catch (e) {
    return e;
  }
});
export const GetAcademicData = createAsyncThunk("fetch/Academic", async () => {
  try {
    const response = await GetAcademic();
    return response.data;
  } catch (e) {
    return e;
  }
});
export const GetGallerycData = createAsyncThunk("fetch/Gallery", async () => {
  try {
    const response = await GetGallery();
    return response.data;
  } catch (e) {
    return e;
  }
});

export const Websiteslice = createSlice({
  name: "websitecontent",
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

export default Websiteslice.reducer;
