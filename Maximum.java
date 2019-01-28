import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    int [] Number = new int[50];
    int Counter, Number1; 
    System.out.print("Enter number");
    Scanner scanner = new Scanner(System.in);
    Number1 = scanner.nextInt();
    System.out.print("To find maximum numbers, enter the first number:");
    Number[0] = scanner.nextInt();
    for(Counter = 1; Counter < Number1; Counter++) {
      System.out.print("Enter next number:");
      Number[Counter] = scanner.nextInt();
    }
    int Maximum = Number[0];
    for(Counter = 1; Counter < Number1; Counter++) {
      if(Number[Counter] > Maximum) {
        Maximum = Number[Counter];
      }
    }
      System.out.print("The maximum among " + Number1 + "numbers you have enterd is " + Maximum + ".");
  }
}