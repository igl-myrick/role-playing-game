export const names = ["Alexander", "Amanda", "Amy", "Andrew", "Angela", "Anna", "Anthony", "Ashley", "Barbara", "Benjamin", "Betty", "Brandon", "Brenda", "Brian", "Carol", "Carolyn", "Charles", "Christine", "Christopher", "Cynthia", "Daniel", "David", "Deborah", "Debra", "Dennis", "Diane", "Donald", "Donna", "Dorothy", "Edward", "Elizabeth", "Emily", "Emma", "Eric", "Frank", "Gary", "George", "Grace", "Gregory", "Heather", "Jack", "Jacob", "James", "Janet", "Jason", "Jeffrey", "Jennifer", "Jessica", "John", "Jonathan", "Joseph", "Joshua", "Justin", "Karen", "Katherine", "Kathleen", "Kenneth", "Kevin", "Kimberly", "Larry", "Laura", "Linda", "Lisa", "Margaret", "Maria", "Mark", "Mary", "Matthew", "Melissa", "Michael", "Michelle", "Nancy", "Nicholas", "Nicole", "Olivia", "Pamela", "Patricia", "Patrick", "Paul", "Rachel", "Raymond", "Richard", "Robert", "Ronald", "Ryan", "Samantha", "Samuel", "Sandra", "Sarah", "Scott", "Sharon", "Shirley", "Stephanie", "Stephen", "Steven", "Susan", "Thomas", "Timothy", "Tyler", "William"];

const warriorStats = {
  name: "Warrior",
  hp: 100,
  atk: 60,
  def: 20,
  critRate: 5
};

const spellswordStats = {
  name: "Spellsword",
  hp: 100,
  atk: 60,
  def: 20,
  critRate: 5
};

const archerStats = {
  name: "Archer",
  hp: 100,
  atk: 60,
  def: 15,
  critRate: 10
};

const mageStats = {
  name: "Mage",
  hp: 100,
  atk: 60,
  def: 15,
  critRate: 10
};

export const classes = [warriorStats, spellswordStats, archerStats, mageStats];

export const rollTen = () => {
  const result = Math.floor(Math.random() * 10) + 1;
  return result;
};

export const rollCombat = (atk, def) => {
  const result = (atk / def) * 3;
  const critRoll = rollTen();
  if (critRoll === 10) {
    return result * 2;
  } else {
    return result; 
  }
};