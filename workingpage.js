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
const flavorTable = {};
for (let i = 0; i < flavors.length; i++) {
  flavors[i] in flavorTable
    ? (flavorTable[flavors[i]] += 1)
    : (flavorTable[flavors[i]] = 1);
}
console.log(flavorTable);
console.table(flavorTable);
console.log("user input array", flavors);
//stores data as strings and
console.log(userInputString);
console.table(flavors);
