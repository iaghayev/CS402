using System;

public class Program
{
    public static void Main()
    {
        string[] words = { "hello", "car", "ice", "house", "code", "monkey", "bus" };

        Console.WriteLine("Words with less than 4 letters:");

        foreach (string word in words)
        {
            if (word.Length < 4)
            {
                Console.WriteLine(word);
            }
        }
    }
}
 