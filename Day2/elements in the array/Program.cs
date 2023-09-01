using System;

public class Program
{
    public static void Main()
    {
        string[] words = { "hello", "car", "ice", "house", "code", "monkey", "bus" };

        Console.WriteLine("Elements:");

        foreach (string word in words)
        {
            Console.WriteLine(word);
        }
    }
}
