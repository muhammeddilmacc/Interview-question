const array1 = [100, 50, 200, 400, 20, 60, 10, 90, 300, 200];
const array2 = [20, 30, 40, 10, 5, 80, 100, 60];
const array3 = [20, 5, 15, 35, 10, 50, 80, 40]; // maxprofit for this will be 240 not 320 because 80X3 = 240 not 320

console.log(maxProfit(array4));

function maxProfit(array) {
    let today = 0;
    let end = array.length - 1;
    let profit = 0;
    let quantity = 1;
    let buy = 0;
    let sell = 0;
    let isBought = false;
    let isDone = false;
    let farthestDay = (end - today) > 3 ? Math.round((end - today) * 0.25) : (end - today); // 25% of the array length and it means how many days we can go further to find the best lot to buy or sell

    while (today < end) {

        if (isDone) {
            break;
        }

        if (!isBought) {
            today = findBestLotToBuy(array, today, end, farthestDay);
            buy = array[today];
            if (today === undefined) { break; }
            if (profit > 0) {
                quantity = Math.floor(profit / +buy);
                profit -= quantity * +buy;
            } else {
                profit -= +buy;
            }

            console.log("bought: " + buy);

            isBought = true;
        } else {
            today = findBestLotToSell(array, today, end, farthestDay);
            sell = array[today];
            console.log('sold: ', sell);
            profit += quantity * +sell;
            isBought = false;
        }
        console.log('profit: ', profit);

    }

    return profit;
}



// find the closest and cheapest lot
function findBestLotToBuy(array, today, end, farthestDay) {
    let cheapestLot = array[today];

    if (end - today < Math.round((array.length - 1) * 0.25)) {
        isDone = true;
        return;
    }


    for (let i = today + 1; i < today + farthestDay; i++) {
        if (array[i] < cheapestLot) {
            cheapestLot = array[i];
            today = i;
        }
    }

    return today;
}

// find the closest and most expensive lot
function findBestLotToSell(array, today, end, farthestDay) {
    let mostExpensiveLot = array[today];

    if (end - today < (array.length - 1) * 0.25) {
        isDone = true;
        return;
    }

    for (let i = today + 1; i < today + farthestDay; i++) {
        if (array[i] > mostExpensiveLot) {
            mostExpensiveLot = array[i];
            today = i;
        }
    }


    return today;
}

