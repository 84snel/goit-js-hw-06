import users from './users.js';

// task-01
const getUserNames = users => {
  const userNames = users.map(item => item.name);
  return userNames;
};

const getUserNames2 = users => users.map(item => item.name);

console.log('task-01:', getUserNames(users));
console.log('task-01.1:', getUserNames2(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//task-02
const getUsersWithEyeColor = (users, color) => {
  const usersWithEyeColor = users.filter(item => item.eyeColor === color);
  return usersWithEyeColor;
};

console.log('task-02:', getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//task-03
const getUsersWithGender = (users, gender) => {
  const filteredObj = users.filter(item => item.gender === gender);
  const usersWithGender = filteredObj.map(item => item.name);
  return usersWithGender;
};

console.log('task-03:', getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//task-04
const getInactiveUsers = users => users.filter(item => !item.isActive);

console.log('task-04:', getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// task-05
const getUserWithEmail = (users, email) => {
  const userWithEmail = users.find(item => item.email === email);
  return userWithEmail;
};

console.log('task-05:', getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log('task-05:', getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// task-06
const getUsersWithAge = (users, min, max) => {
  const usersWithAge = users.filter(item => item.age > min && item.age < max);
  return usersWithAge;
};

console.log('task-06:', getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log('task-06:', getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// task-07
const calculateTotalBalance = users => {
  const totalBalance = users.reduce((acc, item) => acc + item.balance, 0);
  return totalBalance;
};

console.log('task-07:', calculateTotalBalance(users)); // 20916

// task-08
const getUsersWithFriend = (users, friendName) => {
  const usersWithFriend = users.filter(item =>
    item.friends.find(friend => friend === friendName),
  );
  return usersWithFriend;
};

console.log('task-08:', getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log('task-08:', getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//task-09
const getNamesSortedByFriendsCount = users => {
  const usersClone = JSON.parse(JSON.stringify(users));
  const sortedByFriendsCount = usersClone
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(item => item.name);
  return sortedByFriendsCount;
};

console.log('task-09:', getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//task-10
const getSortedUniqueSkills = users => {
  const skills = users.reduce((acc, item) => {
    acc.push(...item.skills);
    return acc;
  }, []);
  const uniqueSkills = skills.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
  const sortedUniqueSkills = uniqueSkills.sort();
  return sortedUniqueSkills;
};

console.log('task-10:', getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 
'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]*/

console.log(users);
