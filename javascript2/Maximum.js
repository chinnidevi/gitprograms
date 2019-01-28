var readln = (typeof readline === 'function') ? (readline) : (function() {
   importPackage(java.io);
   importPackage(java.lang);
   var stdin = new BufferedReader(new InputStreamReader(System['in']));
   return function() {
     return String(stdin.readLine());   
   };                                    
 }());
var Count = []
var Counter = 0
print("Enter a Number:")
var Number = parseInt(readln())
print("To find maximum numbers, enter the first number:")
Count[Counter] = parseInt(readln())
for(Counter = 1; Counter < Number; Counter++) {
  print("Enter next number:")
  Count[Counter] = parseInt(readln())
}
var Read = "The maximum of ";
for(Counter = 0; Counter < Number; Counter++) {
  Read = Read + " " + Count[Counter]; 
}
var Maximum = Count[0]
for(Counter = 1; Counter < Number; Counter++) {
  if(Count[Counter] > parseInt(Maximum)) {
    Maximum = Count[Counter]
  }
}
print(Read + " is " + Maximum + ".");