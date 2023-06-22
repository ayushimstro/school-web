import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GetBaseMenu,
  GetBaseSubMenu,
  GetBaseTheme,
  GetCMS,
  GetAcademic,
  GetNews,
  GetGallery,
  GetTeam,
  CreateEnquiry,
  GetBranchs,
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
export const GetTeamData = createAsyncThunk("fetch/Team", async () => {
  try {
    const response = await GetTeam();
    return response.data;
  } catch (e) {
    return e;
  }
});
export const CreateENQ = createAsyncThunk("fetch/ENQ", async (params) => {
  try {
    const response = await CreateEnquiry(params);
    return response.data;
  } catch (e) {
    return e;
  }
});
export const GetBranch = createAsyncThunk("fetch/Branch", async (params) => {
  try {
    const response = await GetBranchs();
    return response.data;
  } catch (e) {
    return e;
  }
});

export const Websiteslice = createSlice({
  name: "websitecontent",
  initialState: {
    news: [],
    cms: [],
    gallery: [],
    team: [],
    branch: [],
    newserror: "",
    cmserror: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetNewsData.fulfilled, (state, action) => {
      state.news = action.payload.data;
    });
    builder.addCase(GetNewsData.rejected, (state, action) => {
      state.newserror = action.payload;
    });
    builder.addCase(GetCMSData.fulfilled, (state, action) => {
      state.cms = action.payload.data;
    });
    builder.addCase(GetCMSData.rejected, (state, action) => {
      state.cmserror = action.payload;
    });
    builder.addCase(GetGallerycData.fulfilled, (state, action) => {
      state.gallery = action.payload.data;
    });
    builder.addCase(GetGallerycData.rejected, (state, action) => {
      state.cmserror = action.payload;
    });
    builder.addCase(GetTeamData.fulfilled, (state, action) => {
      state.team = action.payload.data;
    });
    builder.addCase(GetTeamData.rejected, (state, action) => {
      state.cmserror = action.payload;
    });
    builder.addCase(CreateENQ.fulfilled, (state, action) => {
      state.team = action.payload.data;
    });
    builder.addCase(CreateENQ.rejected, (state, action) => {
      state.cmserror = action.payload;
    });
    builder.addCase(GetBranch.fulfilled, (state, action) => {
      state.branch = action.payload.data;
    });
    builder.addCase(GetBranch.rejected, (state, action) => {
      state.cmserror = action.payload;
    });
  },
});

export default Websiteslice.reducer;
