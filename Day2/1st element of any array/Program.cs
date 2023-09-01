using System;

public class Program
{
    public static void Main()
    {
        int[] intArray = { 1, 2, 3, 4, 5 };
        PrintFirstElement(intArray);
    }
    public static void PrintFirstElement(Array array)
    {
        if (array.Length > 0)
        {
            Console.WriteLine("First element of the array: " + array.GetValue(0));
        }
        else
        {
            Console.WriteLine("The array is empty.");
        }
    }
}
