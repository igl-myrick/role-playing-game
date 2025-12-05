export const names = ["Alexander", "Amanda", "Amy", "Andrew", "Angela", "Anna", "Anthony", "Ashley", "Barbara", "Benjamin", "Betty", "Brandon", "Brenda", "Brian", "Carol", "Carolyn", "Charles", "Christine", "Christopher", "Cynthia", "Daniel", "David", "Deborah", "Debra", "Dennis", "Diane", "Donald", "Donna", "Dorothy", "Edward", "Elizabeth", "Emily", "Emma", "Eric", "Frank", "Gary", "George", "Grace", "Gregory", "Heather", "Jack", "Jacob", "James", "Janet", "Jason", "Jeffrey", "Jennifer", "Jessica", "John", "Jonathan", "Joseph", "Joshua", "Justin", "Karen", "Katherine", "Kathleen", "Kenneth", "Kevin", "Kimberly", "Larry", "Laura", "Linda", "Lisa", "Margaret", "Maria", "Mark", "Mary", "Matthew", "Melissa", "Michael", "Michelle", "Nancy", "Nicholas", "Nicole", "Olivia", "Pamela", "Patricia", "Patrick", "Paul", "Rachel", "Raymond", "Richard", "Robert", "Ronald", "Ryan", "Samantha", "Samuel", "Sandra", "Sarah", "Scott", "Sharon", "Shirley", "Stephanie", "Stephen", "Steven", "Susan", "Thomas", "Timothy", "Tyler", "William"];

const warriorStats = {
  name: "Warrior",
  hp: 100,
  atk: 60,
  def: 20,
  spAtk: 0,
  spDef: 15,
  critRate: 5
};

const spellswordStats = {
  name: "Spellsword",
  hp: 100,
  atk: 0,
  def: 20,
  spAtk: 60,
  spDef: 15,
  critRate: 5
};

const archerStats = {
  name: "Archer",
  hp: 100,
  atk: 60,
  def: 15,
  spAtk: 0,
  spDef: 20,
  critRate: 10
};

const mageStats = {
  name: "Mage",
  hp: 100,
  atk: 0,
  def: 15,
  spAtk: 60,
  spDef: 20,
  critRate: 10
};

export const classes = [warriorStats, spellswordStats, archerStats, mageStats];