const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter((person) => person.profession === 'developer');
    console.log(developers);
  
  }
  
  // 2. Add Data
  function addData() {
    const newName = prompt('Enter name:');
    const newAge = parseInt(prompt('Enter age:'));
    const newProfession = prompt('Enter profession:');
  
    if (!newName || isNaN(newAge) || !newProfession) {
      alert('Invalid input.');
      return;
    }
  
    const newData = { name: newName, age: newAge, profession: newProfession };
    data.push(newData);
    console.log(data);
  
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const filteredAdmin= data.filter((person) => person.profession !== 'admin');
    console.log(filteredAdmin);

  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [
        { name: 'nikesh', age: 28, profession: 'manager' },
        { name: 'gopi', age: 27, profession: 'professor' }
    ];

    const newArray = data.concat(dummyArray);
    console.log(newArray);
  }
  
  // 5. Average Age
  function averageAge() {
    const sum = data.reduce((acc, dev) => acc + dev.age, 0);
    const average = sum / data.length;
    console.log(average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(dev => dev.age > 25);
    console.log("At least one person is above 25:", isAbove25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const uniqueprofessions = [...new Set(data.map((person) => person.profession))];
    console.log(uniqueprofessions);
  
    
  }
  
  // 8. Sort by Age
  function sortByAge() {
    const sortedByAge = [...data].sort((a, b) => a.age - b.age);
    console.log(sortedByAge);

  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const updatejohnsProfession = data.map((person) => {
        if (person.name === 'john') {
          return { ...person, profession: 'manager' };
        }
        return person;
      });
      console.log(updatejohnsProfession);
    
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCount = data.reduce((count, person) => {
        if(person.profession=="admin" || person.profession=="developer" ){
        count[person.profession] = (count[person.profession] || 0) + 1;
        }
        return count;
      }, {});
      console.log(professionCount);
    
  }