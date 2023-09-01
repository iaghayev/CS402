using System;

public class Program
{
    public static void Main()
    {
        int num1 = 7;
        int num2 = 3;

        int result = ProductOfSumAndDifference(num1, num2);

        Console.WriteLine($"The product of the sum and difference of {num1} and {num2} is: {result}");
    }

    public static int ProductOfSumAndDifference(int a, int b)
    {
        int sum = a + b;
        int difference = a - b;
        int product = sum * difference;

        return product;
    }
}

