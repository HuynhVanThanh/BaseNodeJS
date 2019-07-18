///////////////////////// Task2 ////////////////////////////////////

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
 products = JSON.parse(data);
} catch (err) {
console.error(err);
}

console.log('tong so san pham: ' + products.length);

products.forEach(element => {
    element.dateUpdated = new Date(element.dateUpdated);
});

var numeral = require('numeral');
const moment = require('moment');
moment.updateLocale('vi', {
  calendar : Object
});

products.forEach(element => {
    var id = element.id;
    var name = element.name;
    var price = numeral(parseInt(element.price)).format('0,0');
    var fromNow = moment(element.dateUpdated).fromNow();
    console.log(`${id} - ${name} - ${price} VND - Cap nhat cach day ${fromNow}`);
});

///////////////////////// Task3 ////////////////////////////////////

var format = require('date-fns/format');

products.forEach(element => {
    element.updated = element.dateUpdated;
    element.updated = format(new Date(element.updated), 'MM/DD/YYYY');
    delete element.dateUpdated;
});

const XLSX = require('xlsx');
// create 'worksheet' object from json
const ws = XLSX.utils.json_to_sheet(products);
// Optional: config columns width (character length)
ws['!cols'] = [{ width: 20 }, { width: 25 }, { width: 20 }, { width: 20 }, { width: 20 }];
// create 'workbook' object (which contains multiple sheet)
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Products');
// convert to Microsoft EXCEL workbook and write to a Buffer object
const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

const writeToHardDrive = buf => {
  fs.writeFile('products.xlsx', buf, err => {
    console.log('Write success');
  });
};
writeToHardDrive(buf);


