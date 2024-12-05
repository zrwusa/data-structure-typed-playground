export function getRandomIntArray(length = 1000, min = -1000, max = 1000, unique = true) {
    if (unique) {
        if (max - min + 1 < length) {
            throw new Error('Range too small for unique values with the specified length');
        }
        const allNumbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);
        for (let i = allNumbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
        }
        return allNumbers.slice(0, length);
    }
    else {
        return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    }
}