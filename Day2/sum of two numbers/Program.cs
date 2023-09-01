using System;

public class Program
{
    public static void Main()
    {
        int num1 = 5;
        int num2 = 3;
        int result = AddNumbers(num1, num2);
        Console.WriteLine($"The sum of {num1} and {num2} is: {result}");
    }

    // Function to add two numbers
    public static int AddNumbers(int a, int b)
    {
        return a + b;
    }
}