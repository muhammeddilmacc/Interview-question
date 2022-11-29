const array1 = [100, 50, 200, 400, 20, 60, 10, 90, 300, 200];
const array2 = [20, 30, 40, 10, 5, 80, 100, 60];
const array3 = [20, 10, 5, 30, 60, 90, 40, 50];
const array4 = [20, 5, 15, 35, 10, 50, 80, 40];

console.log(findBestLot(array1, 0, array1.length - 1));

function maxProfit(array) {
    let today = 0;
    let end = array.length - 1;
    let farthestDay = (end - today) > 4 ? Math.round((end - today) * 0.25) : (end - today);
    let profit = 0;
    let buy = array[findBestLot(array)];
    let sell;

    while (today < end) {
        let farthestDay = (end - today) > 4 ? Math.round((end - today) * 0.25) : (end - today);

        let indexOfLot = findBestLot(array, farthestDay);
        if (indexOfLot === -1) {
            break;
        }
        sell = array[indexOfLot];
        profit += sell - buy;
        today = indexOfLot + 1;
        buy = array[findBestLot(array, today, end)];
    }

    return profit;
}



// find the closest and cheapest lot
function findBestLot(array, today, end) {
    let cheapestLot = array[today];
    let farthestDay = (end - today) > 4 ? Math.round((end - today) * 0.25) : (end - today);


    for(let i = today+1; i < farthestDay; i++) {
        if (array[i] < cheapestLot) {
            cheapestLot = array[i];
        }
    }



    return today;
    }
    

