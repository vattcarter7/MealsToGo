import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogoproduction.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogoproduction/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
