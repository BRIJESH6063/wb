/*

==================  STRING ======================
const day = 'Monday'
const str1 = 'rhyming world!!' ;
const str2 = `rhyming world!! on ${ day }` ;
const str3 = `bahenchoooooddddd!!!!
  bawwwaaalll!!
`;

console.log(str1) ;
console.log(str2) ;
console.log(str3) ;

------------ toUpperCase() - toLowerCase() ------------

------------ .indexOf(str2) .lastIndexOf(str2) .includes(str2) ------------
const str = 'hello coder army' ;
console.log(str.indexOf('xxx')) ;
console.log(str.indexOf('coder')) ;
--->>> -1
        6

------------ str.slice(+ve, -ve index both) str.substring(+ve index only)  ------------
const city = 'thiruvananthampuram' ;
console.log(city.slice(6, 12)) ;
console.log(city.slice(-6, -2)) ;

console.log(city.substring(-6, -2)) ;
--->> WRONG, -ve index do not work here

--->>> ananth
       mpur


console.log(30+24+'rohit') ;
54rohit

------------ str.replace(str1, str2) str.replaceAll(str1, str2)  ------------
const str = 'ascjnhsachkljsaascjnhsachkljsa' ;
console.log(str.replace('cjnhs', '-----')) ;
console.log(str.replaceAll('cjnhs', '-----')) ;
---->>> as-----achkljsaascjnhsachkljsa
        as-----achkljsaas-----achkljsa

------------ str.trim() str.trimStart() str.trimEnd()  ------------

------------ str.split(',') str.split(' ')   ----------------





*/


const str = 'ascjnhsachkljsaascjnhsachkljsa' ;
console.log(str.replace('cjnhs', '-----')) ;
console.log(str.replaceAll('cjnhs', '-----')) ;






