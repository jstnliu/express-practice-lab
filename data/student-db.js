const students = [
    {student: 'Shawn', present: true},
    {student: 'Elvis', present: false},
    {student: 'Bartholomew', present: false}
  ];

  function getAll() {
    return students;
  }

  module.exports = {
    getAll,
  }