//console.table will display as a table, easy enough
//requirements
//1.Build prompt input so people can place their order, seperated by commas.  Done, with script to allow for spaces as well
//2. Build a function that displays their order, along with the number of instances of flavors in their order.  Will require storing the inputs in an array, filling an object with the contents of that array, and then filtering through the object to see if the elements are the same and counting them.  Do the katie method and figure out how that works, and then write a comment proposing how it might work wit hanother method
//3. Tabulate the object and display it
//Displays the prompt to enter data and stores it as
const userInputString = prompt("Please enter your froyo order");
//assigns the user inputted string into an array named flavors, and in the process, splits each element by their commas and spaces.  I think I understand the split with commas, but I have no clue about the s trim map thing that splits spaces since Katie helped with that.  Gonna ask about it.
const flavors = userInputString.split(",").map((s) => s.trim());
console.table(flavors);
//This'll display all of the elements of the array flavors as a table, but it won't say how many of each flavor you ordered, you'd need to count it.  For that reason, it needs to be converted to an object so they can be tallied

//Next step is to create the object and the function to add stuff into it
//this all works, figure out why it does, what each piece does.  Then figure out how to do it a different way.
const flavorTable = {}; //creates empty object for stuff to get pushed into
for (
  let i = 0;
  i < flavors.length;
  i++ //creates basic loop that will run through the entirety of the array flavors, that the prompt fills
) {
  flavors[i] in flavorTable //tells to put the element from the flavors array which corresponds with the count into flavor table.  Or wait, it may actually be a condition with a truthy value (Ie: running through the whole array checkign to see if each one is in the object, adding one to the index if it is and setting the index at one if it isn't)
    ? (flavorTable[flavors[i]] += 1) // ternary function, if flavors[i] is in the object already (meeting the condition above by the key of whatever the counter is already on matching a prior key), then it sets the counter one higher.  Figure out if this counter is tied to the value (ie if it's saying vanilla:1 vanilla:1 and then totaling it, or if theres a counter for each one that adds something each time)
    : (flavorTable[flavors[i]] = 1);
}

//for(parameters for the loop) {conditions}

console.log(flavorTable);
console.table(flavorTable);
console.log("user input array", flavors);
//stores data as strings and
console.log(userInputString);
console.table(flavors);

//Alternate plan for doing this
// Create a similar prompt box, then store it in an array the same way.  See if there is another way to write the function and loop that creates the object and pushes the array values into it.  Maybe an arrow function using the same ternary conditions?  I don't think a while loop would work (maybe set it )
