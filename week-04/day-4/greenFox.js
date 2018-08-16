class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.introduce = () => console.log(`Hi, I'm ${name}, a ${age} year old ${gender}.`);
    this.getGoal = () => console.log('My goal is: Live for the moment!');
  }
}
// const jane = new Person('Jane Doe', 30, 'female');
// jane.getGoal();

class Students extends Person {
  constructor(name, age, gender, previousOrganization) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    let skippedDays = 0;  //eslint-disable-line
    this.getGoal = () => console.log('My goal is: Be a junior software developer.');
    this.introduce = () => console.log(`Hi, I'm ${name}, a ${age} year old ${gender} from ${previousOrganization} who skipped ${skippedDays} days from the course already.`);
    this.skipDays = (numberOfDays) => {
      this.skippedDays += numberOfDays;
    };
  }
}
const Jane = new Students('Jane Doe', 30, 'female', 'The School of Life');
Jane.introduce();

class Mentor extends Person {
  constructor(name, age, gender, level) {
    super(name, age, gender);
    this.level = level;
    this.getGoal = () => console.log('My goal is: Educate brilliant junior software developers.');
    this.introduce = () => console.log(`Hi, I'm ${name}, a ${age} year old ${gender} ${level} mentor.`);
  }
}
const joe = new Mentor('Jane Doe', 30, 'female', 'intermediate');
joe.introduce();

class Sponsor extends Person {
  constructor(name, age, gender, company) {
    super(name, age, gender);
    this.company = company;
    let hiredStudents = 0; //eslint-disable-line
    this.introduce = () => console.log(`Hi, I'm ${name}, a ${age} year old ${gender} who represents ${company} and hired hiredStudents students so far.`);
    this.hire = () => { hiredStudents += 1; };
    this.getGoal = () => console.log('My goal is: Hire brilliant junior software developers.');
  }
}
const Joe = new Sponsor('Jane Doe', 30, 'female', 'Google');
Joe.introduce();


class Cohort extends Person {
  constructor(name) {
    super();
    let students = [];
    let mentors = [];
    this.name = name;
    this.addStudent = (obj) => { students.push(obj); };
    this.addMentor = (obj) => { mentors.push(obj); };
    this.info = () => { console.log(`The ${name} cohort has ${students.length} students and ${mentors.length} mentors.`); };
  }
}


// const people = [];

// const mark = new Person('Mark', 46, 'male');
// people.push(mark);

// const jane = new Person();
// people.push(jane);

// const john = new Students('John Doe', 20, 'male', 'BME');
// people.push(john);


// const student = new Students();
// people.push(student);

// const gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
// people.push(gandhi);

// const mentor = new Mentor();
// people.push(mentor);

// const elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
// people.push(elon);
// const awesome = new Cohort('AWESOME');
// awesome.addStudent(student);
// awesome.addStudent(john);
// awesome.addMentor(mentor);
// awesome.addMentor(gandhi);
// awesome.info();
