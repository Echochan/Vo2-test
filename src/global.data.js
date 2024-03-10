const globalData = {}
export function getGlobaldata(key) {
    return globalData[key]
}
export function setGlobaldata(key, value) {
    return globalData[key] = value
}