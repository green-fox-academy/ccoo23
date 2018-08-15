function prison(hisName) {
  const fugutive = hisName;
  let counter = 0;
  let exist = true;
  function Private(name) {
    this.visit = () => {
      counter += 1;  //eslint-disable-line
      if (exist) {
        console.log(`${name} is visited ${counter} time(s)`);
      } else {
        console.log('Nobody is here anymore');
      }
    };
    this.escape = () => {
      exist = false;
      console.log(`BREAKING NEWS ${name} escaped the prison`);
    };
  }
  return new Private(fugutive);
}


const alcatraz = prison('Sad Panda');

alcatraz.visit(); // Sad Panda is visited 1 time(s)
alcatraz.visit(); // Sad Panda is visited 2 time(s)
alcatraz.escape(); // BREAKING NEWS, Sad Panda escaped the prison
alcatraz.visit(); // Nobody is here anymore