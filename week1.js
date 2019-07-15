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

  let m = f = 0;
students.forEach(function(count){
  if(count.gender == 'male') m++;
  else f++;
});


 console.log('so hoc sinh nam la: ' + m);
 console.log('so hoc sinh nu la: ' + f);

let new_stu = students.map(function(list){
  return list.name;
});
console.log (new_stu);
