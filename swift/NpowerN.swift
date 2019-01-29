var Counter = 1;
var Multiple = 1;
print("Enter a number to multiply the number itself is the number of times:", terminator : "");
var Count = Int(readLine()!)! 
while(Counter <= Count) {
  Multiple = Multiple * Count;
  Counter = Counter + 1;
}
print("\(Count) multiplied \(Count) times is \(Multiple).");
 