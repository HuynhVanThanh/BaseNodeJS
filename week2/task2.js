
const fs = require('fs');
// async
// fs.readFile('./products.json', 'utf8', (err, data) => {
// if (err) {
// console.error(err);
// return;
// }
// // console.log(data);
// });
// sync
try {
const data = fs.readFileSync('./products.json', 'utf8');
// console.log(data);
 products = JSON.parse(data);

} catch (err) {
console.error(err);
}

console.log('tong so san pham: ' + products.length);

const moment = require('moment');
products.forEach(element => {
    // element.dateUpdated = new Date();
    element.dateUpdated = moment(element.dateUpdated).fromNow();
});

products.forEach(element => {
    console.log(element.id + ' - ' + element.name + ' - ' 
    + element.price + ' - ' + 'Cập nhật cách đây ' + element.dateUpdated);
    // 0001 - iPhone X - 30,000,000VND - Cập nhật cách đây 3 ngày
});

// console.log(products[1]);