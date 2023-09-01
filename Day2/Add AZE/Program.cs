using System;

public class Program
{
    public static void Main()
    {
        string[] words = { "hello", "car", "ice", "house", "code", "monkey", "bus" };

        Console.WriteLine("Words with 'AZE' appended to those with more than 4 letters:");

        foreach (string word in words)
        {
            if (word.Length > 4)
            {
                string modifiedWord = word + " " + "AZE";
                Console.WriteLine(modifiedWord);
            }
            else
            {
                Console.WriteLine(word);
            }
        }
    }
}