import {RedBlackTree} from 'data-structure-typed';
import {costOfLiving} from './data/cost-of-living-by-country';

type CostOfLiving = {
    Rank: number;
    Country: string;
    "Meal, Inexpensive Restaurant": number;
    "Meal for 2 People, Mid-range Restaurant, Three-course": number;
    "McMeal at McDonalds (or Equivalent Combo Meal)": number;
    "Domestic Beer (0.5 liter draught)": number;
    "Imported Beer (0.33 liter bottle)": number;
    "Coke/Pepsi (0.33 liter bottle)": number;
    "Water (0.33 liter bottle)": number;
    "Milk (regular), (1 liter)": number;
    "Loaf of Fresh White Bread (500g)": number;
    "Eggs (regular) (12)": number;
    "Local Cheese (1kg)": number;
    "Water (1.5 liter bottle)": number;
    "Bottle of Wine (Mid-Range)": number;
    "Domestic Beer (0.5 liter bottle)": number;
    "Imported Beer (0.33 liter bottle).1": number;
    "Cigarettes 20 Pack (Marlboro)": number;
    "One-way Ticket (Local Transport)": number;
    "Chicken Fillets (1kg)": number;
    "Monthly Pass (Regular Price)": number;
    "Gasoline (1 liter)": number;
    "Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)": number;
    "Apartment (1 bedroom) in City Centre": number;
    "Apartment (1 bedroom) Outside of Centre": number;
    "Apartment (3 bedrooms) in City Centre": number;
    "Apartment (3 bedrooms) Outside of Centre": number;
    "Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment": number;
    "Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)": number;
    "Mobile Phone Monthly Plan with Calls and 10GB+ Data": number;
    "Fitness Club, Monthly Fee for 1 Adult": number;
    "Tennis Court Rent (1 Hour on Weekend)": number;
    "Cinema, International Release, 1 Seat": number;
    "1 Pair of Jeans (Levis 501 Or Similar)": number;
    "1 Summer Dress in a Chain Store (Zara, H&M, ...)": number;
    "1 Pair of Nike Running Shoes (Mid-Range)": number;
    "1 Pair of Men Leather Business Shoes": number;
    "Price per Square Meter to Buy Apartment in City Centre": number;
    "Price per Square Meter to Buy Apartment Outside of Centre": number;
    "Average Monthly Net Salary (After Tax)": number;
    "Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate": number;
    "Taxi Start (Normal Tariff)": number;
    "Taxi 1km (Normal Tariff)": number;
    "Taxi 1hour Waiting (Normal Tariff)": number;
    "Apples (1kg)": number;
    "Oranges (1kg)": number;
    "Potato (1kg)": number;
    "Lettuce (1 head)": number;
    "Cappuccino (regular)": number;
    "Rice (white), (1kg)": number;
    "Tomato (1kg)": number;
    "Banana (1kg)": number;
    "Onion (1kg)": number;
    "Beef Round (1kg) (or Equivalent Back Leg Red Meat)": number;
    "Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car)": number;
    "Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child": number;
    "International Primary School, Yearly for 1 Child": number;
};

const indexedByRank = new RedBlackTree(costOfLiving as CostOfLiving[], {
    specifyComparable: node => node.Rank,
    toEntryFn: raw => [raw, undefined]
});
console.log(indexedByRank.size)
console.log('Eggs price', indexedByRank.dfs(node => node?.key?.Country));


function getRandomIntArray(length: number = 1000, min: number = -1000, max: number = 1000, unique = true) {
    if (unique) {
        if (max - min + 1 < length) {
            throw new Error('Range too small for unique values with the specified length');
        }

        const allNumbers = Array.from({length: max - min + 1}, (_, i) => i + min);

        for (let i = allNumbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
        }

        return allNumbers.slice(0, length);
    } else {
        return Array.from({length}, () => Math.floor(Math.random() * (max - min + 1)) + min);
    }
}

const MILLION = 1000000;
const randomArray = getRandomIntArray(MILLION, 0, MILLION - 1, true);
const rbTree = new RedBlackTree<number>();

console.timeLog(`${MILLION.toLocaleString()} add randomly`);
rbTree.clear();
for (let i = 0; i < randomArray.length; i++) rbTree.add(randomArray[i]);
console.timeEnd(`${MILLION.toLocaleString()} add randomly`);
console.timeLog(`${MILLION.toLocaleString()} add`);
rbTree.clear();
for (let i = 0; i < randomArray.length; i++) rbTree.add(i);
console.timeEnd(`${MILLION.toLocaleString()} add`);
console.timeLog(`${MILLION.toLocaleString()} get`);
for (let i = 0; i < randomArray.length; i++) rbTree.get(randomArray[i]);
console.timeEnd(`${MILLION.toLocaleString()} get`);
console.timeLog(`${MILLION.toLocaleString()} getNode`)
for (let i = 0; i < randomArray.length; i++) rbTree.getNode(randomArray[i]);
console.timeEnd(`${MILLION.toLocaleString()} getNode`)