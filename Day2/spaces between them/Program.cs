using System;

public class Program
{
    public static void Main()
    {
        string[] words = { "hello", "car", "ice", "house", "code", "monkey", "bus" };

        string result = string.Join(" ", words);
        Console.WriteLine(result);
    }
}
