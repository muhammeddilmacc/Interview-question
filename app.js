const array1 = [100, 50, 200, 400, 20, 60, 10, 90, 300, 200];
const array2 = [20, 30, 40, 10, 5, 80, 100, 60];
const array3 = [20, 10, 5, 30, 60, 90, 40, 50];
const array4 = [20, 5, 15, 35, 10, 50, 80, 40];

console.log(maxProfit(array4));

function maxProfit(array) {
    let today = 0;
    let end = array.length - 1;
    let profit = 0;
    let balance = 0;
    let quantity = 1;
    let buy = 0;
    let sell = 0;
    let isBought = false;
    let isDone = false;
    let farthestDay = (end - today) > 3 ? Math.round((end - today) * 0.25) : (end - today);

    while (today < end) {


        if (isDone) {
            break;
        }

        if (!isBought) {
            today = findBestLotToBuy(array, today, end, farthestDay);
            buy = array[today];

            if (profit > 0 && buy != undefined) {
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

