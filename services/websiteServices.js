import { Base } from "./config";

export const GetBaseTheme = async () => await Base.get("/theme/find");

export const GetBaseMenu = async () => await Base.get("/menu/find");
export const GetBaseSubMenu = async () => await Base.get("/website/getSubMenu");
export const GetNews = async (type) =>
  await Base.get(`/website/getNews/${type}`);
export const GetAcademic = async () => await Base.get("/website/getAcademic");
export const GetCMS = async (page) => await Base.get(`/website/getCms/${page}`);
export const GetGallery = async () => await Base.get("/website/getGallery");
export const GetTeam = async () => await Base.get("/website/getTeam");
export const GetBranchs = async () => await Base.get("/admin/getBranch");
export const CreateEnquiry = async (params) =>
  await Base.post("/website/createEnquriy", params);
