// Question # 1

let n:number= 100;
let sum:number=0;
for(let i:number=0;i<=n;i++){
    if(i%2==0){
        sum+=i;
    }
}
console.log(sum)

// Question # 2

let student_marks= [90,75,34,21,98,78,33];
for(let i=0;i<=student_marks.length;i++){
    if(student_marks[i]%2==0){
        console.log(student_marks[i])
    }
}

// Question # 3

let prices:number[]= [21,98,52,45,44,26];
for(let i=0;i<prices.length;i++){
    if(prices[i]%2==0){
        prices.splice(i,1)
        i--
    }
}
console.log(prices)

// Question # 4

const Calcarea=(length:number,width:number):number => {
    return length*width;
}
console.log(Calcarea(54,2))


// Question # 5

let marks:number[]= [90,75,34,21,98,78,33];
for(let i=0;i<=marks.length;i++){
    if(marks[i]<50){
        marks.splice(i,1)
        i--
    }
}
console.log(marks)


// Question # 6


let maxNum=( nums:number[])=>{
    let sorted_nums = nums.sort()
    return sorted_nums[nums.length-1]

}
console.log(maxNum([45,22,55,67,89,4,33]))

