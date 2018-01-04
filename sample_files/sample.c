#include <stdio.h>
int main()
{
/*
Multi "line comment "
*/
	// printf() displays the string inside quotation
	printf("Hello, World!");
	return 0;
}

int funcstuff()
{
	char charArr[4];
	int i;
	
	for (i = 0; i < 4; ++i)
	{
		printf("Address of charArr[%d] = %u\n", i, &charArr[i]);
	}
	
	return 0;
}

void swap (int * n1, int * n2)
{
	// pointer n1 and n2 points to the address of num1 and num2 respectively
	int temp;
	temp = *n1;
	*n1 = *n2;
	*n2 = temp;
}

