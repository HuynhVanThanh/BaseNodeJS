
const students = [
    {
      name: 'Nam',
      age: 24,
      gender: 'male',
    },
    {
      name: 'Mai',
      age: 22,
      gender: 'female',
    },
    {
      name: 'Trang',
      age: 23,
      gender: 'female',
    },
    {
      name: 'An',
      age: 20,
      gender: 'male',
    },
    {
      name: 'Thien',
      age: 27,
      gender: 'male',
    },
  ];

// var count = students.reduce((count,currentValue) => {
//   if (currentValue.gender == 'male') count.male++;
//   else count.female++;
//   return count;
// },{male:0,female:0});

var count = students.reduce(function (allgender, curent) { 
  if (curent.gender in allgender) {
    allgender[curent.gender]++;
  }
  else allgender[curent.gender] = 1;
  return allgender;
}, {});

console.log(count);

const new_stu = students.map(students => students.name);
console.log (new_stu);
