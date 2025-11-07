export default class Player {
  constructor(playerName, playerClass) {
    this.name = playerName;
    this.class = playerClass;
    this.stats = {};
  }

  determineStats(playerClass) {
    warriorStats = {
      hp: 100,
      atk: 60,
      def: 40,
      spAtk: 0,
      spDef: 20,
      critRate: 5
    }

    spellswordStats = {
      hp: 100,
      atk: 0,
      def: 40,
      spAtk: 20,
      spDef: 60,
      critRate: 5
    }

    archerStats = {
      hp: 100,
      atk: 60,
      def: 15,
      spAtk: 0,
      spDef: 30,
      critRate: 10
    }

    mageStats = {
      hp: 100,
      atk: 0,
      def: 15,
      spAtk: 60,
      spDef: 30,
      critRate: 10
    }
    
    switch (playerClass) {
      case "Warrior":
        stats = warriorStats;
      case "Spellsword":
        stats = spellswordStats;
      case "Archer":
        stats = archerStats;
      case "Mage":
        stats = mageStats;
    }
  }

  rollCrit() {
    const result = Math.floor(Math.random() * 10) + 1;
    if (result === 10) {
      return true;
    } else {
      return false;
    }
  }
}