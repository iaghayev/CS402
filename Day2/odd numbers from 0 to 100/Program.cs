using System;

public class Program
{
    public static void Main()
    {
        int sum = 0;

        for (int i = 1; i <= 100; i += 2)
        {
            sum += i;
        }

        Console.WriteLine("Sum of odd numbers from 0 to 100: " + sum);
    }
}
