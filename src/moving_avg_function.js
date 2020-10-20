// This function calculates a moving average given an array.
function average(data) {
    let sum = 0 
    for (let i = 0; i < data.length; i++) {
        sum = sum + data[i]
    }
    return sum / data.length;
}

function get_moving_average(data, n) {
    let moving_average = []
    for (var i = 0; i < data.length; i++) {
        let moving_average_last_n_days = (  average(data.slice(0, i + 1).slice(-n)  ) ) ;
        moving_average.push(moving_average_last_n_days);
    }
    return moving_average;
}





export default get_moving_average