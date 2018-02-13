const regexSun = new RegExp("01d|n");
const regexClouds = new RegExp("02|3|4d|n");
const regexSnow = new RegExp("13d|n");

export const replaceIcon = (oldIcon) => {
    if (regexSun.test(oldIcon)) {
        return "sun";
    } else if (regexClouds.test(oldIcon)) {
        return "clouds";
    } else if (regexSnow.test(oldIcon)) {
        return "snow";
    } else {
        return "rain";
    }
}
