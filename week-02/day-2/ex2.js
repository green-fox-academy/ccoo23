// - Create variable named `al` and assign the value `Greenfox` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear Greenfox`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

const al = "Greenfox";
function greet(para) {
  if (para == undefined || para == null) {
    console.log("Greetings, dear " + "whomever you are");
  } else {
    console.log("Greetings, dear " + para);
  }

}

greet(al);
