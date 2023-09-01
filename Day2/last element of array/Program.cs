using System;

public class Program
{
    public static void Main()
    {
        int[] intArray = { 1, 2, 3, 4, 5 };
        PrintLastElement(intArray);
    }
    public static void PrintLastElement<T>(T[] array)
    {
        if (array.Length > 0)
        {
            Console.WriteLine("Last element of the array: " + array[array.Length - 1]);
        }
        else
        {
            Console.WriteLine("The array is empty.");
        }
    }
}
