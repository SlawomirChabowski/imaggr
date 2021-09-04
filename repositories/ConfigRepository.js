import { CONFIG_KEYS } from '~/enums/ConfigRepository';

export class ConfigRepository {
    isDarkModeEnabled () {
        return JSON.parse(localStorage.getItem(CONFIG_KEYS.ENABLED_DARK_MODE));
    }

    toggleDarkMode (val) {
        localStorage.setItem(CONFIG_KEYS.ENABLED_DARK_MODE, val);
    }
}
