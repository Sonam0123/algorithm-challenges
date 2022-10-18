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
// console.log(sumZero([-4, -2, -1, 0, 1, 2 ,3]));

function sameFrequency(num1, num2){
    let freq1 = {}
    let freq2 = {}
    let str1 = num1.toString()
    
    let str2 = num2.toString()
    if(str1.length !== str2.length){
        return false
    }
    for(let i = 0; i < str1.length; i++){
        freq1[str1[i]] = freq1[str1[i]] + 1 || 1
    }

    for(let j =0; j < str1.length; j++){
        freq2[str2[j]] = freq2[str2[j]] + 1 || 1
    }
    for(let key in freq1){
        if(freq1[key]!=freq2[key]){
            return false;
        }
    }
    return true
}
// console.log(sameFrequency(182, 281));
var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        let curr = target-nums[i]
        if(curr in map){
            return[curr, nums[i]]
        }else{
            map[nums[i]] = true
        }
    }
};
// console.log(twoSum([3,2,4], 6));

//move zeroes to the end of the array
var moveZeroes = function(nums) {
    let j = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            nums[j] = nums[i]
            j++
        }
    }
    for(let i = j; i < nums.length; i++){
        nums[i] = 0
    }
    return nums
};
console.log(moveZeroes([0,1,0,3,12]));

