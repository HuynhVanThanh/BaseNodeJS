
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

count_male = students.reduce((accumulator,currentValue) => {
  if (currentValue.gender == 'male') accumulator++;
  return accumulator;
},0);

count_female = students.reduce((accumulator,currentValue) => {
  if (currentValue.gender == 'female') accumulator++;
  return accumulator;
},0);

 console.log('so hoc sinh nam la: ' + count_male);
 console.log('so hoc sinh nu la: ' + count_female);

const new_stu = students.map(students => students.name);
console.log (new_stu);
