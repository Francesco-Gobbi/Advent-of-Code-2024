import { readFileSync } from "fs";

interface CoordinateType {
    x: number;
    y: number;
}

let count: number = 0;

const takeChar = (pos: CoordinateType, array: string[][]) => {
    let words: string[] = Array(8).fill("");
    let length = 4;

    if (pos.x >= 3 && pos.y >= 3) {
        for (let i = 0; i < length; i++) {
            words[7] += array[pos.x - i][pos.y - i];
        }
    }
    if (pos.x >= 3 && pos.y <= array[0].length - 4) {
        for (let i = 0; i < length; i++) {
            words[6] += array[pos.x - i][pos.y + i];
        }
    }
    if (pos.x <= array.length - 4 && pos.y >= 3) {
        for (let i = 0; i < length; i++) {
            words[5] += array[pos.x + i][pos.y - i];
        }
    }
    if (pos.x >= 3) {
        for (let i = 0; i < length; i++) {
            words[4] += array[pos.x - i][pos.y];
        }
    }
    if (pos.y >= 3) {
        for (let i = 0; i < length; i++) {
            words[3] += array[pos.x][pos.y - i];
        }
    }
    if (pos.x <= array.length - 4) {
        for (let i = 0; i < length; i++) {
            words[2] += array[pos.x + i][pos.y];
        }
    }
    if (pos.y <= array[0].length - 4) {
        for (let i = 0; i < length; i++) {
            words[1] += array[pos.x][pos.y + i];
        }
    }
    if (pos.x <= array.length - 4 && pos.y <= array[0].length - 4) {
        for (let i = 0; i < length; i++) {
            words[0] += array[pos.x + i][pos.y + i];
        }
    }

    count += words.filter((w) => w === "XMAS").length;
};

let data = readFileSync("input.txt", "utf-8")
    .split("\n")
    .map((line: string) => line.split(""));
console.log(data)

data.forEach((row: string[], x: number) => {
    row.forEach((char: string, y: number) => {
        if (char === "X" || char === "S") {
            takeChar({ x, y }, data);
        }
    });
});

console.log(count);
