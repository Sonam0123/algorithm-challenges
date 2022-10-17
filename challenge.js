//finding the single number in an array of duplicates
singleNumber = function(nums) {
    let freq = {}
    for(const num of nums){
        freq[num] = freq[num] + 1 ||  1
    }
    console.log(freq);
    for(const key in freq){
        if(freq[key] == 1){
            return key
        }
    }
};
console.log(singleNumber([4,1,2,1,2]));
