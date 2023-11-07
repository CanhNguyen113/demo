




//Khai bao
/*
    Noi dung
*/

//toan tu noi chuoi
/*var fullName = 'Nguyen Phuoc Minh Canh';
var age = 22;
var Name = 'Canh';
Name += ' Minh'
console.log(Name);*/

//toan tu nang cao
//==(chi xem value)
//===(so sanh ca key va value)
//!==()




//Goi ham thong bao
// alert(fullName);
// alert(age);

// console.log(fullName)
// setInterval(function() { 
//     console.log('Day la log' + Math.random())
// }, 1000)

//boolean
// var is = 1;
// var ifs =2
// var isSuccess= is < ifs
// console.log(isSuccess);

//toan logic(chi tra ve ket qua trong 2 ve thuong la ve sau (&&)-lay ket qua dau tien neu nhu khong nam trong 6 ky tu(||))
/*
var a =1;
var b =2;
var c =3;

if(!(a>0)){
    console.log('Dieu kien dung');
}
else
    console.log('Dieu kien sai');
*/

//kieudulieu
/*
1. Dữ liệu nguyên thủy - Primitive Data
- Number: var a = 1 (Nhan biet bang cach console.log(typeof a))
- String: var fullName = 'Minh Canh'(Nhan biet bang cach console.log(typeof fullName))
- Boolean: var isSuccess = true;(Nhan biet bang cach console.log(typeof isSuccess))
- Undefined: var age:(Khong gan gia tri)(Nhan biet bang cach console.log(typeof age))
- Null
- Symbol: var id= Symbol('id');(Tinh duy nhat)
2. Dữ liệu phức tạp – Complex Data
-Function: var myFunction = function(){alert('Ho');}
- Object: var myObject = {name: 'Minh Canh',
                          age :18,
                          address: 'HaNoi'};(chua duoc nhieu dang du lieu va chua ca key va value)
 -array(thuoc object type)
 var myArray = [
    'java',
    'PHP',
    'Ruby'
 ];(array khac object o cho khong can dinh nghia key)
*/
//cach dat ten ham:a-z,A-Z,0-9,_,$(khong duoc dat so o ky tu dau tien)

// function showDialog(){
//     alert('Hi chao cac ban')
// }
// showDialog();

//tham so
// function writeLog()
// {
//     var myString='';
//     for(var param of arguments){
//        myString += `${param} - `
//     }
//     console.log(myString)
//     // if(message)
//     //   console.log(message)
//     // if(message_2)
//     //   console.log(message_2)
// }
// writeLog('Log 1','Log 2');


//return
// var isConfirm = confirm('Message');
// console.log(isConfirm);
// function cong(a,b){
//     return '2' + '8'
// }
// var result = cong(2, 8);
// console.log(result);

// var test ='hell\'ba ga\'';
// console.log(test);

//teamplate ES6
/*var firstName = 'Minh';
var lastName = 'Canh';
console.log(`Toi la: ${firstName} ${lastName}`)*/


// var languages = [
//     'Java','Ruby','PHP',
// ];
// // console.log(languages.push('C#'))
// // console.log(languages.unshift('js'))
// //languages.splice(1,0,'C#')//chen
// console.log(languages.slice(0))

// var languages2=[
//     'python',
//     'sql'
// ];
// console.log(languages.concat(languages2))

// var myInfo={
//     name: 'Minh Canh',
//     age: 22,
//     address: 'Viet Nam',
//     emailKey: 'sondn@fulltack.edu.vn',
   // getName: function(){
       // return this.name;
   // }
// };
// myInfo.email = 'minhcanh123@gmail.com'
// //delete myInfo.age;
// console.log(myInfo.getName());

//Object Contructor
// function User(firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName =lastName;
//     this.avatar =avatar;
//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// var author = new User('Nguyen','Canh','Avatar');
// var user = new User('Son', 'Dang','Avatar');

// author.title= 'Chia se';
// user.commnent= 'Binh luan';

// console.log(author.getName());
// console.log(user.getName());

////Object prototype: thêm 1 thuộc tính bên ngoài hàm tạo:author.prototype.className = 'F8';

//Date
// var date = new Date(); 

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// console.log(day);
// var arrLength = languages.length;

// for( var i =0 ; i< arrLength ;i++){
//     console.log(languages[i]);
// }
// for (var key in languages){
//     console.log(languages[key]);
// }
// var i =0 ;
// var isSuccess = false;
// do{
//     i++;
//     console.log('Nap the lan '+ i);
//     //thanh cong
//     if(false){
//         isSuccess = true;
//     }
// }while(!isSuccess && i < 3);

//Vong lap long nhau
// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];
// for(var i=0 ;i<myArray.length;i++){
//     for(j=0 ;j<myArray[i].length;j++){
//         console.log(myArray[i][j])
//     }
// }
// for (var i=100;i>=0;i -=5){
//     console.log(i);
// }
//
//var array = ['a', 'b', 'c', 'a', 'b', 'c'];
//console.log([...(new Set(array))]);

//de quy
// function countDown(num){
//     if(num > 0){
//         console.log(num);
//         return countDown(num -1);
//     }
//     return num;
// }
// countDown(3);

// function loop(start, end, cb) {
//     if(start <= end){
//         cb(start);
//         return loop(start +1, end, cb);
//     }
// }

// loop(0, languages.length -1, function(index) {
//     console.log('index:', index );
// });

//de quy
// function giaiThua(number){
//     var output = 1;
//     for (var i =number; i > 0; i--){
//         output = output * i;
//     }
//     return output;
// }
// console.log(giaiThua(6));


