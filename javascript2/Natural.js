var readln = (typeof readline === 'function') ? (readline) : (function() {
   importPackage(java.io);
   importPackage(java.lang);
   var stdin = new BufferedReader(new InputStreamReader(System['in']));
   return function() {
     return String(stdin.readLine());   
   };                                    
 }());
 print("How many natural numbers you want to print?")
 var Count = parseInt(readln())
var OutputString = "The natural numbers upto " + Count + " are"
for(Counter = 1; Counter <= parseInt(Count); Counter++) {
  OutputString = OutputString + " " + Counter 
  }
print(OutputString + ".")