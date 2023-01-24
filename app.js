function isVow(a){
    let myArr = []
    for (var i = 0; i < a.length; i++ ){
        if (a[i] == 97){
            myArr.push('a');
        } else if (a[i] == 101) {
            myArr.push('e');
        } else if (a[i] == 105) {
            myArr.push('i');
        } else if (a[i] == 111) {
            myArr.push('o');
        } else if (a[i] == 117) {
            myArr.push('u');
        }  else {
            myArr.push(a[i]);
        }
    }
    return myArr;
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])); 
//[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);

console.log(isVow([101,121,110,113,113,103,121,121,101,107,103])); 
//["e",121,110,113,113,103,121,121,"e",107,103]