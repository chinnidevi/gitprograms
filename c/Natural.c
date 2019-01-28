#include <stdio.h>

int main(void) {
  int Count, Counter = 1;
  printf("How many natural numbers you want to print?");
  scanf("%d", &Count);
  printf("The natural numbers upto %d are", Count);
  for(Counter = 1; Counter <= Count; Counter++)
  printf(" %d", Counter);
  printf(".");
  return 0;
}