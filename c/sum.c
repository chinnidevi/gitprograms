#include<stdio.h>
void main()
{
int Number1, Number2, Sum;
printf("Enter a number to perform addition");
scanf("%d", &Number1);
printf("Enter second number");
scanf("%d", &Number2);
Sum = Number1 + Number2;
printf("Sum of %d and %d is %d.", Number1 , Number2, Sum);
}
