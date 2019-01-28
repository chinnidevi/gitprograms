import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter a number upto which you want to print natural numbers:");
    int Number = scanner.nextInt();
    System.out.print("The first " + Number + " natural numbers are");
    for(int Counter = 1; Counter <= Number; Counter++) {
      System.out.print(" " + Counter);
    }
    System.out.print(".");
  }
}