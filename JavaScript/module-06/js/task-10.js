import users from "./users.js";
const getSortedUniqueSkills = (users) => {
  //   const result = users
  //     .reduce((acc, user) => {
  //       acc.push(...user.skills);
  //       return acc;
  //     }, [])
  //     .sort();
  //   return new Set(result);
  // второй метод
  //   return users
  //     .reduce((acc, user) => {
  //       acc.push(...user.skills);
  //       return acc;
  //     }, [])
  //     .sort()
  //     .filter((skill, index, skills) => skill !== skills[index - 1]);
  // третий метод
  const result = users
    .reduce((acc, user) => {
      acc.push(...user.skills);
      return acc;
    }, [])
    .sort();
  return result.filter((skill, index) => {
    return index === result.indexOf(skill);
  });
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
