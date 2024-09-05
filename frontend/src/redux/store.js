import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userSlice";
import { homesApi } from "./homeSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [homesApi.reducerPath]: homesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, homesApi.middleware),
});
