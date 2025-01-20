function total(str){
    let sum = 0
    for(let i=0;i<str.length;i++){
        sum = sum + str.charCodeAt(i)
    }
    return sum
}

console.log("total('a') -> 97", total('a'))
console.log("total('aaa') -> 291", total('aaa'))
