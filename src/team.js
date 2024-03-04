class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(character) {
      this.members.add(character);
    }
  
    [Symbol.iterator]() {
      let current = 0;
      const membersArray = Array.from(this.members);
  
      return {
        next() {
          if (current < membersArray.length) {
            return { done: false, value: membersArray[current++] };
          }
          return { done: true };
        }
      };
    }
  }
  
  // Пример использования
  const team = new Team();
  
  team.add({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  });
  
  team.add({
    name: 'Маг',
    type: 'Magician',
    health: 40,
    level: 2,
    attack: 10,
    defence: 40
  });
  
  for (const char of team) {
    console.log(char);
  }
  