import { readFileSync } from "fs";

try {
    const rulesData = readFileSync("input.txt", "utf-8");
    let rawRules: { numero: number; regole: number[] }[] = [];

    rulesData.split("\n").forEach((line: string) => {
        const [data, rule] = line.split("|").map(Number);
        let found = false;

        for (let e of rawRules) {
            if (e.numero === data) {
                e.regole.push(rule);
                found = true;
                break;
            }
        }

        if (!found) {
            rawRules.push({ numero: data, regole: [rule] });
        }
    });

    rawRules.forEach((e) => {
        e.regole = Array.from(new Set(e.regole)).sort();
    });

    const updatesData = readFileSync("order.txt", "utf-8");
    let orderData: number[][] = [];

    updatesData.split("\n").forEach((line: string) => {
        const data = line.split(",").map(Number);
        let isValid = true;

        for (let idx = 0; idx < data.length; idx++) {
            const number = data[idx];
            const firstData = data.slice(0, idx);
            const rule = rawRules.find((e) => e.numero === number) ?? { regole: [] };

            if (firstData.length > 0) {
                const check = firstData.some((num) => rule.regole.includes(num));
                if (check) {
                    isValid = false;
                    break;
                }
            }
        }

        if (isValid) {
            orderData.push(data);
        }
    });

    let result = 0;
    for (const value of orderData) {
        const middle = Math.floor(value.length / 2);
        result += value[middle];
    }

    console.log("The summ is:", result);
} catch (err) {
    console.error("Error reading files:", err);
}
