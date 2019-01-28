Number = int(input("Enter a number to multiply the number itself is the number of times:"))
Counter = 1
Multiple = 1
while(Counter <= Number):
  Multiple = Multiple * Number
  Counter = Counter + 1
print(str(Number) + " Multiplied " + str(Number) + " times is " + str(Multiple) + ".")