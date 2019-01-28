Count = int(input("How many natural numbers you want to print?"))
Counter = 1
print ("The first " + str(Count) + " natural numbers are")
for Counter in range(1,Count):
  print (Counter)
  Counter = Counter + 1
print (str(Count) + ".")