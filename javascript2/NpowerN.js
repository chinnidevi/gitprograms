var readln = (typeof readline === 'function') ? (readline) : (function() {
   importPackage(java.io);
   importPackage(java.lang);
   var stdin = new BufferedReader(new InputStreamReader(System['in']));
   return function() {
     return String(stdin.readLine());   
   };                                    
 }());
 var Counter = 1
var Multiple = 1
print("Enter a number to multiply the number itself is the number of times:");
var Count = parseInt(readln())
while(Counter <= Count) {
  Multiple = Multiple * parseInt(Count)
  Counter = Counter + 1
}
print(Count + " multiplied " + Count + " times is " + Multiple + ".")