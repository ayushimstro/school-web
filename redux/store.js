import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { ThemeSlice } from "./slices/themeslices";
import { MenusSlice } from "./slices/menusubmenuslices";
import { Websiteslice } from "./slices/websiteslices";
const makeStore = () =>
  configureStore({
    reducer: {
      [ThemeSlice.name]: ThemeSlice.reducer,
      [MenusSlice.name]: MenusSlice.reducer,
      [Websiteslice.name]: Websiteslice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
