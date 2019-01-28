import java.util.Scanner;
class Main {
  public static void main(String[] args) {
  long Number, Counter = 1, Multiple = 1;
  Scanner scanner = new Scanner(System.in);
  System.out.print("Enter a number to multiply the number itself is the number of times:");
  Number = scanner.nextInt();
  while(Counter <= Number) {
    Multiple = Multiple * Number;
    Counter++;
  }
  System.out.print(Number + " multiplied " + Number + " times is " + Multiple + ".");
  }
}