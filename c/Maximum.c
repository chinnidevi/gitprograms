#include <stdio.h>

int main(void) {
  int Number[10], Counter = 0, Maximum = 0, Number1;
  printf("In how many numbers you want tp print maximum number");
  scanf("%d", &Number1);
  printf("To find maximum numbers, enter first number:");
  scanf("%d", &Number[Counter]);
  for(Counter = 1; Counter < Number1; Counter++) {
    printf("Enter next number:");
    scanf("%d", &Number[Counter]);
  }
  Maximum = Number[0];
  for(Counter = 1; Counter < Number1; Counter++)  {
    if(Number[Counter] > Maximum)
      Maximum = Number[Counter];
  }
  printf("The maximum number among");
  for(Counter = 0;Counter < Number1;Counter++)
  printf(" %d", Number[Counter]);
  printf(" is %d.", Maximum);
  return 0;
}