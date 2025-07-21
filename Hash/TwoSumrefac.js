/* bit confusing */

function twoSum(nums, target){
    const numsMap = {};

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];

        if (compliment in numsMap && numsMap[compliment] != i) {
            return [numsMap[compliment], i];
        }
        numsMap[nums[i]] = i;
    }
    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
