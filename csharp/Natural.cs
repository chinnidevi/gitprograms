using System;
class MainClass {
  public static void Main (string[] args) {
    int Counter = 0;
    Console.Write("How many natural numbers you want to print?");
    int Count = Convert.ToInt32(Console.ReadLine());
    Console.Write("The first " + Count + " natural numbers are");
    for(Counter = 1; Counter <= Count; Counter++) {
      Console.Write(" " + Counter);
    }
    Console.Write(".");
  }
}