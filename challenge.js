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
// console.log(singleNumber([4,1,2,1,2]));

//finding intersection of two arrays
function intersect(nums1, nums2){
    let map = {}
    let arr = []
    for(let i = 0; i < nums1.length; i++){
        map[nums1[i]] = true
    }
    for(let j = 0; j < nums2.length; j++){
        if(arr.length === 2){
            break
        }
        if(map[nums2[j]]){
            arr.push(nums2[j])
        }
    }
    return arr
}
// console.log(intersect([1,2,2,1], [2,2]));


//finding the sum in an array that equates to 0
function sumZero(nums){
    let left = 0
    let right = nums.length -1
    while(left < right){
        let sum = nums[left] + nums[right]
        if(sum  === 0){
            return [nums[left], nums[right]]
        }
        else if(sum < 0){
            left++
        }else{
            right--
        }
    }
}
console.log(sumZero([-4, -2, -1, 0, 1, 2 ,3]));
