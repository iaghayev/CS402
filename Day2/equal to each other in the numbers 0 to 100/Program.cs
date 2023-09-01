using System;

public class Program
{
    public static void Main()
    {
        Console.WriteLine("Equal digits from 0 to 100:");

        for (int i = 10; i <= 99; i++)
        {
            int tensDigit = i / 10;
            int onesDigit = i % 10;

            if (tensDigit == onesDigit)
            {
                Console.WriteLine(i);
            }
        }
    }
}
