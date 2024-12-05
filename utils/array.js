"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomIntArray = getRandomIntArray;
function getRandomIntArray(length, min, max, unique) {
    var _a;
    if (length === void 0) { length = 1000; }
    if (min === void 0) { min = -1000; }
    if (max === void 0) { max = 1000; }
    if (unique === void 0) { unique = true; }
    if (unique) {
        if (max - min + 1 < length) {
            throw new Error('Range too small for unique values with the specified length');
        }
        var allNumbers = Array.from({ length: max - min + 1 }, function (_, i) { return i + min; });
        for (var i = allNumbers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [allNumbers[j], allNumbers[i]], allNumbers[i] = _a[0], allNumbers[j] = _a[1];
        }
        return allNumbers.slice(0, length);
    }
    else {
        return Array.from({ length: length }, function () { return Math.floor(Math.random() * (max - min + 1)) + min; });
    }
}
