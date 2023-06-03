import { Base } from "./config";

export const GetBaseTheme = async () => await Base.get("/theme/find");

export const GetBaseMenu = async () => await Base.get("/menu/find");
