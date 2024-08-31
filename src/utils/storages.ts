import AsyncStorage from "@react-native-async-storage/async-storage";
import { LanguageType } from "i18n";
import { ThemeColor } from "themes/colors";

export enum KeyStorage {
    Language = 'language',
    Theme = 'theme'
}

type StorageValue = LanguageType | ThemeColor | string;

const get = async (key: KeyStorage): Promise<string | undefined> => {
    const value = await AsyncStorage.getItem(key);
    return value || undefined;
}

const set = async (key: KeyStorage, value: StorageValue) => {
    await AsyncStorage.setItem(key, value);
}

const remove = async (key: KeyStorage) => {
    await AsyncStorage.removeItem(key);
}

const Storages = {
    get,
    set,
    remove
};

export default Storages;



