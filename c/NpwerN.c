#include <stdio.h>
int main(void) {
  int Number, Counter = 1, Multiple = 1;
  printf("Enter a number to multiply the number itself is the number of times:");
  scanf("%d", &Number);
  while(Counter <= Number) {
    Multiple = Multiple * Number;
    Counter++;
  }
  printf("%d multiplied %d times is %d.", Number, Number, Multiple);
  return 0;
}