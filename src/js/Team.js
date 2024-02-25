import Character from "./Character";

export default class Team {
    constructor() {
        this.members = new Set([
          new Character('Лучник', 'Bowman', 50, 1, 40, 10),
          new Character('Фехтовальщик', 'Swordsman', 50, 1, 40, 10),
          new Character('Волшебник', 'Magician', 50, 1, 40, 10),
          new Character('Демон', 'Daemon', 50, 1, 40, 10),
        ]);
      }

      *[Symbol.iterator]() {
        const charList = Array.from(this.members);
        yield charList[0];
        yield charList[1];
        yield charList[2];
        return charList[3];
      }
}




