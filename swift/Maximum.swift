var Counter = 0;
var Number = [Int]()
var Maximum = 0;
print("To find maximum number among ten numbers, enter first number:", terminator : " ");
Number.append(Int(readLine()!)!)
while Counter <= 8 
{
  print("Enter next number:", terminator : "");
  Number.append(Int(readLine()!)!)
  Counter = Counter + 1;
}
Maximum = Number[0];
while Counter <= 9 {
  if(Number[Counter] > Maximum) {
    Maximum = Number[Counter];
    Counter = Counter + 1
  }
}
print("The maximum number among ten numbers you have enterd is \(Maximum).");
  