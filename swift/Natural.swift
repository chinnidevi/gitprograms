print("How many natural numbers you want to print?", terminator : " ");
var Count = Int(readLine()!)!
var Counter = 1;
print("The natural numbers upto \(Count) are", terminator : " ");
while(Counter <= Count) {
 print(" \(Counter)", terminator : "");
 Counter = Counter + 1;
}
print(".");