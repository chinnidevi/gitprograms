NumberList = []
Number = 0
Number1 = int(input("In how many numbers you want to find greatest number"))
Number = int(input("To find maximum numbers, enter the first number:"))
NumberList.append(Number)
for Counter in range(1,Number1):
  Number = int(input("Enter next number"))
  NumberList.append(Number)
Maximum = NumberList[0]
for Counter in range(1,Number1):
  if(NumberList[Counter] > Maximum):
    Maximum = NumberList[Counter]
print("The maximum number among numbers you have enterd are " + str(NumberList[Counter]) + ".")