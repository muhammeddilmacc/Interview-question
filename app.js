const array1 = [100, 50, 200, 400, 20, 60, 10, 90, 300, 200];
const array2 = [20, 30, 40, 10, 5, 80, 100, 60];
const array3 = [20, 10, 5, 30, 60, 90, 40, 50];
const array4 = [20, 5, 15, 35, 10, 50, 80, 40];

//console.log(findBestLotToBuy(array3, 0, array3.length - 1));
console.log(maxProfit(array4));

function maxProfit(array) {
    let today = 0;
    let end = array.length - 1;
    let profit = 0;
    let buy;
    let sell;
    let isBought = false;
    let farthestDay = (end - today) > 3 ? Math.round((end - today) * 0.25) : (end - today);

    while (today < end) {


        if (today === -1) {
            break;
        }

        if (!isBought) {
            today = findBestLotToBuy(array, today, end, farthestDay);
            buy = array[today];
            profit = +profit ? profit + (sell - buy) : -9999;
            isBought = true;
        } else {
            today = findBestLotToSell(array, today, end, farthestDay);
            sell = array[today];
            profit += sell - buy;
            isBought = false;
        }

    }

    return profit;
}



// find the closest and cheapest lot
function findBestLotToBuy(array, today, end) {
    let cheapestLot = array[today];

    for (let i = today + 1; i < today + farthestDay; i++) {
        if (array[i] < cheapestLot) {
            cheapestLot = array[i];
            today = i;
        }
    }

    if (end - today < (array.length - 1) * 0.25) {
        today = -1;
    }

    return today;
}

// find the closest and most expensive lot
function findBestLotToSell(array, today, end) {
    let mostExpensive = array[today];

    for (let i = today + 1; i < today + farthestDay; i++) {
        if (array[i] > mostExpensive) {
            mostExpensive = array[i];
            today = i;
        }
    }
    if (end - today < (array.length - 1) * 0.25) {
        today = -1;
    }
    return today;
}

