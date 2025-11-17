export default class Player {
  constructor(playerName, playerClass) {
    this.name = playerName;
    this.class = playerClass;
    this.stats = {};
  }

  determineStats(playerClass) {
    const warriorStats = {
      hp: 100,
      atk: 60,
      def: 40,
      spAtk: 0,
      spDef: 20,
      critRate: 5
    }

    const spellswordStats = {
      hp: 100,
      atk: 0,
      def: 40,
      spAtk: 20,
      spDef: 60,
      critRate: 5
    }

    const archerStats = {
      hp: 100,
      atk: 70,
      def: 15,
      spAtk: 0,
      spDef: 30,
      critRate: 10
    }

    const mageStats = {
      hp: 100,
      atk: 0,
      def: 15,
      spAtk: 70,
      spDef: 30,
      critRate: 10
    }
    
    switch (playerClass) {
      case "Warrior":
        return this.stats = warriorStats;
      case "Spellsword":
        return this.stats = spellswordStats;
      case "Archer":
        return this.stats = archerStats;
      case "Mage":
        return this.stats = mageStats;
    }
  }

  rollCrit() {
    const result = Math.floor(Math.random() * 10) + 1;
    return result;
  }
}