/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let count =0;
    let arr = preferences;
    for (let i=0; i<preferences.length; i++){
        if (arr[arr[arr[i]-1]-1] === (i+1)){
        count++;
            }
    }
    return parseInt(count/3);
};
