let mot = "mmm mmm mmm"
let target = " ";
  let index =0;
for(let i = 0 ;i<mot.length;i++){
    if(mot[i] == target){
      index = mot.indexOf(mot[i]);
    }
}
console.log(index)