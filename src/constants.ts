export enum AppID {
    BROWSER = "browser",
    MOBILE = "mobile"
}
export const APP_ID_SEARCH_KEY = 'appId';
export const DEFAULT_APP_ID = AppID.BROWSER;

export const convertStringToAppID = (appIdString: string): AppID => {
    if (Object.values(AppID).includes(appIdString as AppID)) {
        return appIdString as AppID;
    }
    throw Error(`Invalid AppID ${appIdString} has been passed`);
}
